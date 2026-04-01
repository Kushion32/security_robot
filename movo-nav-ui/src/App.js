import React, { useEffect, useState } from 'react';
import ROSLIB from 'roslib';
import './App.css';
import WaypointDashboard from './WaypointDashboard';
import MapManager from './MapManager';

function App() {
  const [ros, setRos] = useState(null);
  const [connected, setConnected] = useState(false);
  const [page, setPage] = useState('navigation');

  useEffect(() => {
    const rosInstance = new ROSLIB.Ros({ url: 'ws://0.0.0.0:9090' });
    rosInstance.on('connection', () => { console.log('Connected to ROS.'); setConnected(true); });
    rosInstance.on('error', ()    => setConnected(false));
    rosInstance.on('close', ()    => setConnected(false));
    setRos(rosInstance);
    return () => rosInstance.close();
  }, []);

  const tabs = [
    { id: 'navigation', label: '🧭 Navigation' },
    { id: 'maps',       label: '🗺 Map Manager' },
  ];

  return (
    <div className="App" style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0a1724', color: 'white' }}>                    
      {/* ── Tab bar ─────────────────────────────────────────── */}
      <div style={{
        display: 'flex', alignItems: 'stretch',
        backgroundColor: '#dee8f9', padding: '0 20px',
        borderBottom: '3px solid #b49b5f',
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setPage(tab.id)}
            style={{
              padding: '13px 22px', border: 'none', cursor: 'pointer',
              backgroundColor: 'transparent', fontSize: 16, fontWeight: 600,
              color: page === tab.id ? '#0a1724' : '#6b7280',
              borderBottom: page === tab.id ? '3px solid #b49b5f' : '3px solid transparent',
              marginBottom: -3, transition: 'color 0.15s',
            }}
          >
            {tab.label}
          </button>
        ))}

        {/* Connection indicator + app title */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 10 }}>
          <span style={{
            fontSize: 12, padding: '4px 12px', borderRadius: 20,
            backgroundColor: connected ? '#166534' : '#7f1d1d',
            color: connected ? '#86efac' : '#fca5a5',
            fontWeight: 600,
          }}>
            {connected ? '● Connected' : '○ Disconnected'}
          </span>
          <span style={{ color: '#0a1724', fontSize: 16, fontWeight: 'bold', marginLeft: 20 }}>Operator UI</span>
        </div>
      </div>

      {/* ── Pages ───────────────────────────────────────────── */}
      {page === 'navigation' && <WaypointDashboard ros={ros} connected={connected} />}
      {page === 'maps'       && <MapManager ros={ros} />}
    </div>
  );
}

export default App;

