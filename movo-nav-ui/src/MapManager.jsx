/**
 * MapManager.jsx
 * Step-by-step wizard for mapping a new environment, saving maps,
 * loading maps on startup, and labelling rooms.
 *
 * Communicates with map_manager.py via:
 *   publish  → /map_manager/command  (std_msgs/String JSON)
 *   subscribe← /map_manager/status   (std_msgs/String JSON, latched)
 */
import React, { useEffect, useState, useRef, useCallback } from 'react';
import ROSLIB from 'roslib';

// ─────────────────────────────────────────────────────────────────────────────
// Design tokens
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  primary:  '#b49b5f',
  success:  '#059669',
  warning:  '#d97706',
  danger:   '#c97070',
  bg:       '#0a1724',
  card:     'rgba(255, 255, 255, 0.05)',
  border:   'rgba(255, 255, 255, 0.1)',
  text:     '#f8fafc',
  muted:    '#94a3b8',
  dark:     '#dee8f9',
};

const WIZARD_STEPS = ['Start SLAM', 'Drive & Map', 'Save Map', 'Add Labels', 'Done'];

// ─────────────────────────────────────────────────────────────────────────────
// Shared UI primitives
// ─────────────────────────────────────────────────────────────────────────────
const Card = ({ children, style }) => (
  <div style={{
    backgroundColor: C.card, borderRadius: 10, padding: 20,
    boxShadow: '0 1px 5px rgba(0,0,0,0.09)', border: `1px solid ${C.border}`,
    ...style,
  }}>
    {children}
  </div>
);

const Btn = ({ children, onClick, color = C.primary, disabled, small, outline, fullWidth }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      padding: small ? '7px 14px' : '10px 22px',
      backgroundColor: outline ? 'transparent' : (disabled ? '#94a3b8' : color),
      color: outline ? color : '#fff',
      border: outline ? `2px solid ${color}` : 'none',
      borderRadius: 7, cursor: disabled ? 'not-allowed' : 'pointer',
      fontSize: small ? 13 : 14, fontWeight: 600,
      width: fullWidth ? '100%' : undefined,
      opacity: disabled ? 0.7 : 1,
      transition: 'opacity 0.15s, background 0.15s',
      lineHeight: 1.4,
    }}
  >
    {children}
  </button>
);

const StatusBanner = ({ msg, type }) => {
  if (!msg) return null;
  const s = {
    success: { bg: '#dcfce7', border: '#86efac', text: '#166534' },
    error:   { bg: '#fee2e2', border: '#fca5a5', text: '#991b1b' },
    info:    { bg: '#dbeafe', border: '#93c5fd', text: '#1e40af' },
    warning: { bg: '#fef9c3', border: '#fde047', text: '#854d0e' },
  };
  const c = s[type] || s.info;
  return (
    <div style={{
      padding: '10px 16px', borderRadius: 7, marginBottom: 14,
      backgroundColor: c.bg, border: `1px solid ${c.border}`, color: c.text,
      fontSize: 13, lineHeight: 1.5,
    }}>
      {msg}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Teleop Panel — hold buttons or use arrow keys to drive the robot
// ─────────────────────────────────────────────────────────────────────────────
const TeleopPanel = ({ ros }) => {
  const publishVel = useCallback((linear, angular) => {
    if (!ros) return;
    const t = new ROSLIB.Topic({ ros, name: '/movo/cmd_vel', messageType: 'geometry_msgs/Twist' });
    t.publish(new ROSLIB.Message({
      linear: { x: linear, y: 0, z: 0 },
      angular: { x: 0, y: 0, z: angular },
    }));
  }, [ros]);

  // Keyboard bindings
  useEffect(() => {
    const MAP = { ArrowUp: [0.25, 0], ArrowDown: [-0.25, 0], ArrowLeft: [0, 0.5], ArrowRight: [0, -0.5] };
    const down = (e) => { if (MAP[e.key]) { e.preventDefault(); publishVel(...MAP[e.key]); } };
    const up   = (e) => { if (MAP[e.key]) publishVel(0, 0); };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up); };
  }, [publishVel]);

  // Hold helpers: keep publishing while pressed
  const hold = (lin, ang) => {
    let iv;
    return {
      onMouseDown:  () => { publishVel(lin, ang); iv = setInterval(() => publishVel(lin, ang), 80); },
      onMouseUp:    () => { clearInterval(iv); publishVel(0, 0); },
      onMouseLeave: () => { clearInterval(iv); publishVel(0, 0); },
      onTouchStart: (e) => { e.preventDefault(); publishVel(lin, ang); iv = setInterval(() => publishVel(lin, ang), 80); },
      onTouchEnd:   () => { clearInterval(iv); publishVel(0, 0); },
    };
  };

  const bs = (bg = C.primary) => ({
    width: 56, height: 56, border: 'none', borderRadius: 8,
    backgroundColor: bg, color: '#fff', fontSize: 22, cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    userSelect: 'none', touchAction: 'none',
  });

  return (
    <div style={{ padding: 14, backgroundColor: '#0f172a', borderRadius: 10, display: 'inline-block' }}>
      <p style={{ color: '#94a3b8', fontSize: 11, margin: '0 0 8px', textAlign: 'center' }}>
        Drive Robot · hold buttons or use ↑↓←→ keys
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
        <button style={bs()} {...hold(0.25, 0)}>↑</button>
        <div style={{ display: 'flex', gap: 5 }}>
          <button style={bs()} {...hold(0, 0.5)}>←</button>
          <button style={bs('#334155')} onMouseDown={() => publishVel(0, 0)} onTouchStart={(e) => { e.preventDefault(); publishVel(0, 0); }}>■</button>
          <button style={bs()} {...hold(0, -0.5)}>→</button>
        </div>
        <button style={bs()} {...hold(-0.25, 0)}>↓</button>
      </div>
      <p style={{ color: '#475569', fontSize: 10, margin: '8px 0 0', textAlign: 'center' }}>
        Fwd/Back: 0.25 m/s &nbsp;·&nbsp; Turn: 0.5 rad/s
      </p>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Live Map Canvas — renders OccupancyGrid, robot pose, and room labels.
// Supports click-to-place in labelling mode (onMapClick).
// ─────────────────────────────────────────────────────────────────────────────
const LiveMapCanvas = ({ ros, labels = [], onMapClick, clickable = false }) => {
  const canvasRef    = useRef(null);
  const mapRef       = useRef(null);
  const poseRef      = useRef(null);
  const animRef      = useRef(null);
  const mapImageRef  = useRef(null);  // cached offscreen canvas — only rebuilt on new map data
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!ros) return;

    const mapSub = new ROSLIB.Topic({
      ros, name: '/map', messageType: 'nav_msgs/OccupancyGrid',
      compression: 'none', throttle_rate: 500,
    });
    mapSub.subscribe((msg) => {
      const info = {
        width: msg.info.width, height: msg.info.height,
        resolution: msg.info.resolution,
        origin: { x: msg.info.origin.position.x, y: msg.info.origin.position.y },
        data: msg.data,
      };
      mapRef.current = info;

      // Pre-render the occupancy grid into an offscreen canvas once per map update.
      // The render loop just blits this image — no per-frame pixel loops.
      const off = document.createElement('canvas');
      off.width  = info.width;
      off.height = info.height;
      const octx = off.getContext('2d');
      const imageData = octx.createImageData(info.width, info.height);
      for (let i = 0; i < info.data.length; i++) {
        const cell = info.data[i];
        let r, g, b;
        if      (cell === -1) { r = 180; g = 180; b = 180; }
        else if (cell === 0)  { r = 255; g = 255; b = 255; }
        else { const s = Math.max(0, 255 - cell * 2.55); r = s; g = s; b = s; }
        const row = Math.floor(i / info.width);
        const col = i % info.width;
        const idx = ((info.height - 1 - row) * info.width + col) * 4;
        imageData.data[idx]     = r;
        imageData.data[idx + 1] = g;
        imageData.data[idx + 2] = b;
        imageData.data[idx + 3] = 255;
      }
      octx.putImageData(imageData, 0, 0);
      mapImageRef.current = off;
      setLoaded(true);
    });

    // Subscribe to /map_manager/robot_pose (PoseStamped published by
    // map_manager.py at 5 Hz).  This works during SLAM AND navigation
    // without needing tf2_web_republisher or ROSLIB.TFClient.
    const mgmtPoseSub = new ROSLIB.Topic({
      ros, name: '/map_manager/robot_pose',
      messageType: 'geometry_msgs/PoseStamped', throttle_rate: 100,
    });
    mgmtPoseSub.subscribe((msg) => {
      const { x, y } = msg.pose.position;
      const { z, w } = msg.pose.orientation;
      poseRef.current = { x, y, theta: 2 * Math.atan2(z, w) };
    });

    // Also listen to /amcl_pose so the arrow keeps working when navigating
    // without the map_manager node running.
    const poseSub = new ROSLIB.Topic({
      ros, name: '/amcl_pose',
      messageType: 'geometry_msgs/PoseWithCovarianceStamped', throttle_rate: 300,
    });
    poseSub.subscribe((msg) => {
      const { x, y } = msg.pose.pose.position;
      const { z, w } = msg.pose.pose.orientation;
      poseRef.current = { x, y, theta: 2 * Math.atan2(z, w) };
    });

    // ── Render loop ────────────────────────────────────────────
    const render = () => {
      const canvas = canvasRef.current;
      const map    = mapRef.current;
      if (!canvas || !map) { animRef.current = requestAnimationFrame(render); return; }

      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Blit the pre-rendered occupancy grid (rebuilt only when /map changes)
      if (mapImageRef.current) {
        ctx.drawImage(mapImageRef.current, 0, 0, canvas.width, canvas.height);
      }

      // Helper: world → canvas
      const w2c = (wx, wy) => ({
        cx: ((wx - map.origin.x) / map.resolution / map.width)  * canvas.width,
        cy: canvas.height - ((wy - map.origin.y) / map.resolution / map.height) * canvas.height,
      });

      // Draw labels (yellow pins)
      labels.forEach(({ name, x, y }) => {
        const { cx, cy } = w2c(x, y);
        ctx.beginPath(); ctx.arc(cx, cy, 9, 0, 2 * Math.PI);
        ctx.fillStyle = '#f59e0b'; ctx.fill();
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
        ctx.font = 'bold 11px Arial';
        ctx.fillStyle = '#000';
        ctx.fillText(name, cx + 12, cy + 4);
      });

      // Draw robot (green arrow)
      if (poseRef.current) {
        const { x, y, theta } = poseRef.current;
        const { cx, cy } = w2c(x, y);
        ctx.save(); ctx.translate(cx, cy); ctx.rotate(-theta);
        const sz = 13;
        ctx.beginPath();
        ctx.moveTo(sz, 0); ctx.lineTo(-sz * 0.6, -sz * 0.5);
        ctx.lineTo(-sz * 0.3, 0); ctx.lineTo(-sz * 0.6, sz * 0.5);
        ctx.closePath();
        ctx.fillStyle = '#00CC44'; ctx.fill();
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.restore();
      }

      animRef.current = requestAnimationFrame(render);
    };
    animRef.current = requestAnimationFrame(render);

    return () => {
      mapSub.unsubscribe(); poseSub.unsubscribe(); mgmtPoseSub.unsubscribe();
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [ros, labels]);

  // Canvas click → world coords
  const handleClick = (e) => {
    if (!clickable || !onMapClick) return;
    const canvas = canvasRef.current;
    const map    = mapRef.current;
    if (!canvas || !map) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width  / rect.width;
    const scaleY = canvas.height / rect.height;
    const cx = (e.clientX - rect.left) * scaleX;
    const cy = (e.clientY - rect.top)  * scaleY;
    const mapX = (cx / canvas.width) * map.width;
    const mapY = (1 - cy / canvas.height) * map.height;
    onMapClick(mapX * map.resolution + map.origin.x, mapY * map.resolution + map.origin.y);
  };

  return (
    <div>
      {!loaded && (
        <p style={{ color: C.muted, fontSize: 13, margin: 0 }}>
          ⏳ Waiting for map data on <code>/map</code>…
        </p>
      )}
      <canvas
        ref={canvasRef}
        width={500} height={500}
        onClick={handleClick}
        style={{
          width: '100%', height: 'auto', borderRadius: 6, display: 'block',
          imageRendering: 'pixelated', backgroundColor: '#b4b4b4',
          cursor: clickable ? 'crosshair' : 'default',
          border: clickable ? `2px dashed ${C.primary}` : '2px solid #334155',
        }}
      />
      <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap' }}>
        {[
          { color: '#00CC44', label: 'Robot' },
          { color: '#f59e0b', label: 'Label' },
          { color: '#fff',    label: 'Free space' },
          { color: '#000',    label: 'Walls' },
          { color: '#b4b4b4', label: 'Unknown' },
        ].map(({ color, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: color, border: '1px solid #555' }} />
            <span style={{ color: '#ccc', fontSize: 11 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Label editor — reused in wizard step 3 and in manage-existing-map view.
// Uses forwardRef + useImperativeHandle so the parent can inject robot_pose
// without prop-drilling a setter through an intermediary.
// ─────────────────────────────────────────────────────────────────────────────
const LabelEditorWithRef = React.forwardRef(
  ({ ros, mapName, labels, onLabelsChanged, sendCommand }, ref) => {
    const [pendingClick, setPendingClick] = useState(null);
    const [robotPose,    setRobotPose]    = useState(null);
    const [labelInput,   setLabelInput]   = useState('');

    React.useImperativeHandle(ref, () => ({ setRobotPose }));

    const confirmClickLabel = () => {
      if (!labelInput.trim() || !pendingClick) return;
      sendCommand({ action: 'save_label', map: mapName, name: labelInput.trim(), x: pendingClick.x, y: pendingClick.y, theta: 0 });
      setLabelInput(''); setPendingClick(null);
      onLabelsChanged();
    };
    const confirmRobotLabel = () => {
      if (!labelInput.trim() || !robotPose) return;
      sendCommand({ action: 'save_label', map: mapName, name: labelInput.trim(), x: robotPose.x, y: robotPose.y, theta: robotPose.theta });
      setLabelInput(''); setRobotPose(null);
      onLabelsChanged();
    };
    const deleteLabel = (name) => {
      sendCommand({ action: 'delete_label', map: mapName, name });
      onLabelsChanged();
    };

    return (
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-start' }}>

        {/* Controls panel */}
        <Card style={{ flex: '0 0 275px', minWidth: 240 }}>
          <h3 style={{ margin: '0 0 14px', fontSize: 15 }}>📍 Room Labels</h3>

          {/* Click-on-map */}
          <div style={{ marginBottom: 16 }}>
            <strong style={{ fontSize: 13 }}>Method 1 — Click on map</strong>
            <p style={{ color: C.muted, fontSize: 12, margin: '4px 0 8px', lineHeight: 1.5 }}>
              Click the map on the right to pin a spot, then give it a name.
            </p>
            {pendingClick ? (
              <div style={{ backgroundColor: '#dbeafe', borderRadius: 7, padding: 10 }}>
                <p style={{ margin: '0 0 6px', fontSize: 12, color: '#1e40af' }}>
                  📍 ({pendingClick.x.toFixed(2)}, {pendingClick.y.toFixed(2)})
                </p>
                <input
                  value={labelInput} autoFocus
                  onChange={e => setLabelInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && confirmClickLabel()}
                  placeholder="e.g. Bathroom, Lobby, Exit…"
                  style={inputStyle('#93c5fd')}
                />
                <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
                  <Btn small onClick={confirmClickLabel} disabled={!labelInput.trim()}>✓ Save</Btn>
                  <Btn small outline color={C.muted} onClick={() => { setPendingClick(null); setLabelInput(''); }}>✕</Btn>
                </div>
              </div>
            ) : (
              <p style={{ color: '#94a3b8', fontSize: 12, fontStyle: 'italic' }}>Click the map to select a position…</p>
            )}
          </div>

          {/* Robot position */}
          <div style={{ marginBottom: 16 }}>
            <strong style={{ fontSize: 13 }}>Method 2 — Robot's position</strong>
            <p style={{ color: C.muted, fontSize: 12, margin: '4px 0 8px', lineHeight: 1.5 }}>
              Drive the robot to the room, then capture its position.
            </p>
            <Btn small outline color={C.primary}
              onClick={() => { sendCommand({ action: 'get_robot_pose' }); }}
            >
              📍 Get Robot's Position
            </Btn>
            {robotPose && (
              <div style={{ backgroundColor: robotPose.stale ? '#fefce8' : '#f0fdf4', borderRadius: 7, padding: 10, marginTop: 8 }}>
                <p style={{ margin: '0 0 6px', fontSize: 12, color: robotPose.stale ? '#854d0e' : '#166534' }}>
                  {robotPose.stale ? '⚠ Last known position ' : '📍 Robot at '}
                  ({robotPose.x.toFixed(2)}, {robotPose.y.toFixed(2)})
                  {robotPose.stale && <span style={{ display: 'block', fontSize: 11, marginTop: 2 }}>Live TF unavailable — using position from when mapping was active.</span>}
                </p>
                <input
                  value={labelInput}
                  onChange={e => setLabelInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && confirmRobotLabel()}
                  placeholder="Name this location…"
                  style={inputStyle('#86efac')}
                />
                <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
                  <Btn small onClick={confirmRobotLabel} disabled={!labelInput.trim()}>✓ Save</Btn>
                  <Btn small outline color={C.muted} onClick={() => { setRobotPose(null); setLabelInput(''); }}>✕</Btn>
                </div>
              </div>
            )}
          </div>

          {/* Label list */}
          <div>
            <strong style={{ fontSize: 13 }}>Saved Labels ({labels.length})</strong>
            <div style={{ marginTop: 6, maxHeight: 220, overflowY: 'auto' }}>
              {labels.length === 0
                ? <p style={{ color: '#94a3b8', fontSize: 12, fontStyle: 'italic' }}>No labels yet — add some above.</p>
                : labels.map(l => (
                  <div key={l.name} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '5px 9px', backgroundColor: '#f8fafc', borderRadius: 6,
                    marginBottom: 4, border: `1px solid ${C.border}`,
                  }}>
                    <span style={{ fontSize: 13 }}>
                      🟡 <strong>{l.name}</strong>
                      <span style={{ color: '#94a3b8', fontSize: 11, marginLeft: 4 }}>
                        ({l.x.toFixed(1)}, {l.y.toFixed(1)})
                      </span>
                    </span>
                    <button onClick={() => deleteLabel(l.name)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.danger, fontSize: 18, lineHeight: 1 }}
                    >×</button>
                  </div>
                ))
              }
            </div>
          </div>
        </Card>

        {/* Map canvas */}
        <div style={{ flex: '1 1 300px', backgroundColor: '#1a1a2e', borderRadius: 10, padding: 14, border: '2px solid #334155' }}>
          <h4 style={{ color: '#fff', margin: '0 0 10px', fontSize: 14 }}>
            🗺 {mapName} — click to place label
          </h4>
          <LiveMapCanvas
            ros={ros} labels={labels} clickable
            onMapClick={(x, y) => {
              setPendingClick({ x, y });
              setRobotPose(null);
              setLabelInput('');
            }}
          />
        </div>
      </div>
    );
  }
);

const inputStyle = (borderColor) => ({
  padding: '7px 10px', borderRadius: 5, border: `1px solid ${borderColor}`,
  fontSize: 13, width: '100%', boxSizing: 'border-box',
});

// ─────────────────────────────────────────────────────────────────────────────
// Main MapManager component
// ─────────────────────────────────────────────────────────────────────────────
const MapManager = ({ ros }) => {
  // ── State ──────────────────────────────────────────────────────────────────
  const [view,         setView]         = useState('home');     // home | wizard | manage
  const [step,         setStep]         = useState(0);          // wizard step 0-4
  const [maps,         setMaps]         = useState([]);
  const [activeMap,    setActiveMap]    = useState(null);
  const [statusMsg,    setStatusMsg]    = useState('');
  const [statusType,   setStatusType]   = useState('info');
  const [isMapping,    setIsMapping]    = useState(false);
  const [newMapName,   setNewMapName]   = useState('');
  const [savedMapName, setSavedMapName] = useState('');
  const [selectedMap,  setSelectedMap]  = useState(null);   // for manage view
  const [labels,       setLabels]       = useState([]);

  const cmdTopicRef      = useRef(null);
  const labelEditorRef   = useRef(null);
  const handleStatusRef  = useRef(null);  // always points to latest handleStatus
  const mapLoadedRef     = useRef(false); // true once map_loaded received; prevents repeated start_navigation

  // Keep ref in sync every render so the ROS subscription never goes stale
  useEffect(() => { handleStatusRef.current = handleStatus; });

  // ── ROS setup ───────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!ros) return;

    cmdTopicRef.current = new ROSLIB.Topic({
      ros, name: '/map_manager/command', messageType: 'std_msgs/String',
    });

    const statusSub = new ROSLIB.Topic({
      ros, name: '/map_manager/status', messageType: 'std_msgs/String',
    });
    statusSub.subscribe((msg) => {
      try { handleStatusRef.current(JSON.parse(msg.data)); }
      catch (e) { console.error('MapManager: bad status JSON', e); }
    });

    // Fetch initial state
    sendCommand({ action: 'list_maps' });
    sendCommand({ action: 'get_active_map' });

    return () => { statusSub.unsubscribe(); mapLoadedRef.current = false; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ros]);

  const sendCommand = useCallback((cmd) => {
    if (!cmdTopicRef.current) return;
    cmdTopicRef.current.publish(new ROSLIB.Message({ data: JSON.stringify(cmd) }));
  }, []);

  // ── Status handler ──────────────────────────────────────────────────────────
  const handleStatus = useCallback((data) => {
    if (data.message) {
      setStatusMsg(data.message);
      setStatusType(data.type === 'error' ? 'error' : data.type === 'mapping_started' ? 'success' : 'info');
    }

    switch (data.type) {
      case 'maps_list':
        setMaps(data.maps || []);
        setActiveMap(data.active);
        // Only trigger start_navigation if we don't already have a loaded map.
        // Sending it every reconnect was killing and restarting the nav stack
        // in a tight loop, preventing movo_move_base from ever connecting.
        if (data.active && !mapLoadedRef.current) {
          sendCommand({ action: 'start_navigation', name: data.active });
        }
        break;
      case 'active_map':
        setActiveMap(data.name);
        break;
      case 'mapping_started':
        setIsMapping(true);
        setStatusType('success');
        break;
      case 'mapping_stopped':
        setIsMapping(false);
        setStatusType('info');
        setStep(2);   // advance to save step
        break;
      case 'map_saved':
        setSavedMapName(data.name);
        setStatusType('success');
        // gmapping is still running and publishing /map + TF, so no need
        // to start map_server here.  Robot pose will be live in the label step.
        sendCommand({ action: 'list_labels', map: data.name });
        setStep(3);   // advance to labels step
        break;
      case 'labels_list':
        setLabels(data.labels || []);
        break;
      case 'label_saved':
        sendCommand({ action: 'list_labels', map: savedMapName || selectedMap });
        break;
      case 'map_loaded':
        // map_server is now serving /map — canvas will pick it up automatically
        mapLoadedRef.current = true;
        setStatusMsg(`Map '${data.name}' loaded — you can now add room labels.`);
        setStatusType('success');
        break;
      case 'label_deleted':
        sendCommand({ action: 'list_labels', map: savedMapName || selectedMap });
        break;
      case 'active_map_set':
        setActiveMap(data.name);
        setStatusType('success');
        if (view === 'wizard') setStep(4);
        sendCommand({ action: 'list_maps' });
        break;
      case 'map_deleted':
        setSelectedMap(null);
        setView('home');
        sendCommand({ action: 'list_maps' });
        break;
      case 'robot_pose':
        // Forward into the LabelEditorWithRef if it's mounted
        if (labelEditorRef.current?.setRobotPose) {
          labelEditorRef.current.setRobotPose({
            x: data.x, y: data.y, theta: data.theta,
            stale: data.stale || false,
          });
        }
        break;
      case 'error':
        setStatusType('error');
        break;
      default:
        break;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMapName, selectedMap, view]);

  // ── Wizard progress bar ─────────────────────────────────────────────────────
  const WizardProgress = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 22, flexWrap: 'wrap' }}>
      {WIZARD_STEPS.map((label, i) => (
        <React.Fragment key={i}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 700,
              backgroundColor: i < step ? C.success : i === step ? C.primary : '#e2e8f0',
              color: i <= step ? '#fff' : '#94a3b8',
            }}>
              {i < step ? '✓' : i + 1}
            </div>
            <span style={{ fontSize: 12, color: i === step ? C.text : '#94a3b8', fontWeight: i === step ? 600 : 400 }}>
              {label}
            </span>
          </div>
          {i < WIZARD_STEPS.length - 1 && <span style={{ color: '#e2e8f0' }}>›</span>}
        </React.Fragment>
      ))}
    </div>
  );

  // ── Wizard steps ────────────────────────────────────────────────────────────

  // Step 0 — briefing
  const renderStep0 = () => (
    <Card>
      <h3 style={{ margin: '0 0 12px' }}>Step 1 of 5 — Start SLAM Mapping</h3>
      <p style={{ color: C.muted, lineHeight: 1.7, marginBottom: 16 }}>
        This will launch <strong>gmapping</strong>, the robot's simultaneous localisation and mapping
        system. The robot will build a 2D floor plan as you drive it around.
      </p>
      <div style={{ backgroundColor: '#fef9c3', border: '1px solid #fde047', borderRadius: 7, padding: 14, marginBottom: 20 }}>
        <strong>⚠ Before you start:</strong>
        <ul style={{ margin: '6px 0 0 18px', padding: 0, color: '#854d0e', fontSize: 13, lineHeight: 1.7 }}>
          <li>Make sure the LiDAR sensor is active and publishing <code>/movo/base_scan_filtered</code></li>
          <li>Stop any running navigation stack (AMCL / move_base) first</li>
          <li>Place the robot at the starting position (e.g. near the entrance)</li>
        </ul>
      </div>
      <Btn onClick={() => { sendCommand({ action: 'start_mapping' }); setStep(1); }}>
        🗺 Start SLAM Mapping
      </Btn>
    </Card>
  );

  // Step 1 — drive around
  const renderStep1 = () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <Card style={{ flex: '0 0 280px' }}>
        <h3 style={{ margin: '0 0 12px' }}>Step 2 of 5 — Map the Environment</h3>
        {isMapping ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{
                width: 10, height: 10, borderRadius: '50%',
                backgroundColor: '#22c55e', display: 'inline-block',
                animation: 'blink 1.5s ease-in-out infinite',
              }} />
              <strong style={{ color: '#166534' }}>Mapping Active</strong>
            </div>
            <p style={{ color: C.muted, fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>
              Drive the robot through <strong>every room</strong> slowly and systematically.
              Cover all hallways, dead-ends and doorways. The live map on the right shows your progress.
            </p>
            <TeleopPanel ros={ros} />
            <div style={{ marginTop: 16 }}>
              <Btn color={C.danger} onClick={() => sendCommand({ action: 'ready_to_save' })}>
                ⏹ Stop — Proceed to Save
              </Btn>
            </div>
          </>
        ) : (
          <>
            <p style={{ color: C.muted }}>⏳ Starting mapping system…</p>
            {statusMsg && (
              <div style={{
                padding: '10px 12px', borderRadius: 6, marginTop: 10,
                backgroundColor: statusType === 'error' ? '#fee2e2' : '#e0f2fe',
                border: `1px solid ${statusType === 'error' ? '#fecaca' : '#bae6fd'}`,
                color: statusType === 'error' ? '#991b1b' : '#0c4a6e',
                fontSize: 12, lineHeight: 1.5,
              }}>
                {statusMsg}
              </div>
            )}
          </>
        )}
      </Card>

      <div style={{ flex: '1 1 300px', backgroundColor: '#1a1a2e', borderRadius: 10, padding: 14, border: '2px solid #334155' }}>
        <h4 style={{ color: '#fff', margin: '0 0 10px' }}>🗺 Live SLAM Map</h4>
        <LiveMapCanvas ros={ros} labels={[]} />
      </div>
    </div>
  );

  // Step 2 — save
  const renderStep2 = () => (
    <Card>
      <h3 style={{ margin: '0 0 12px' }}>Step 3 of 5 — Save the Map</h3>
      <p style={{ color: C.muted, lineHeight: 1.7, marginBottom: 16 }}>
        Give this map a clear, descriptive name — you'll see it in the map list on startup.
        Use underscores instead of spaces (e.g. <code>hotel_grand_floor_1</code>).
      </p>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
        <input
          value={newMapName}
          onChange={e => setNewMapName(e.target.value.replace(/\s+/g, '_').replace(/[^\w-]/g, ''))}
          placeholder="e.g. hotel_grand_floor_1"
          style={{
            padding: '9px 13px', borderRadius: 7, border: `1px solid ${C.border}`,
            fontSize: 14, flex: '1 1 200px', minWidth: 180,
          }}
          onKeyDown={e => e.key === 'Enter' && newMapName.trim() && sendCommand({ action: 'save_map', name: newMapName })}
        />
        <Btn onClick={() => sendCommand({ action: 'save_map', name: newMapName })} disabled={!newMapName.trim()}>
          💾 Save Map
        </Btn>
      </div>
      <p style={{ color: '#94a3b8', fontSize: 12, marginTop: 8 }}>
        Files will be saved to the <code>movo_demos/maps/</code> directory as <code>{newMapName || 'map_name'}.pgm</code> and <code>{newMapName || 'map_name'}.yaml</code>.
      </p>
    </Card>
  );

  // Step 3 — add labels
  const renderStep3 = () => (
    <div>
      <Card style={{ marginBottom: 14 }}>
        <h3 style={{ margin: '0 0 8px' }}>Step 4 of 5 — Add Room Labels</h3>
        <p style={{ color: C.muted, fontSize: 13, margin: 0, lineHeight: 1.6 }}>
          Mark important rooms and locations (Bathroom, Reception, Exit, etc.). These become
          navigation waypoints so the robot can be sent there from the Navigation tab.
          You can add more labels later — this step is optional.
        </p>
      </Card>

      <LabelEditorWithRef
        ref={labelEditorRef}
        ros={ros}
        mapName={savedMapName}
        labels={labels}
        onLabelsChanged={() => sendCommand({ action: 'list_labels', map: savedMapName })}
        sendCommand={sendCommand}
      />

      <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Btn
          color={C.success}
          onClick={() => {
            sendCommand({ action: 'set_active_map', name: savedMapName });
          }}
        >
          ✓ Done — Activate This Map
        </Btn>
        <Btn outline color={C.muted}
          onClick={() => {
            sendCommand({ action: 'set_active_map', name: savedMapName });
            setStep(4);
          }}
        >
          Skip labels for now →
        </Btn>
      </div>
    </div>
  );

  // Step 4 — done
  const renderStep4 = () => (
    <Card style={{ textAlign: 'center', padding: '50px 30px' }}>
      <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
      <h2 style={{ margin: '0 0 10px' }}>Map Ready!</h2>
      <p style={{ color: C.muted, maxWidth: 420, margin: '0 auto 28px', lineHeight: 1.7 }}>
        <strong>{savedMapName}</strong> has been saved and set as the active map.
        The robot will use this map for navigation. Room labels have been written
        to <code>movo_waypoints.yaml</code> automatically.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Btn onClick={() => {
          setView('home'); setStep(0);
          setNewMapName(''); setSavedMapName(''); setLabels([]);
          setStatusMsg('');
          sendCommand({ action: 'list_maps' });
        }}>
          ← Back to Map List
        </Btn>
        <Btn outline color={C.primary}
          onClick={() => { setView('manage'); setSelectedMap(savedMapName); setLabels([]); sendCommand({ action: 'list_labels', map: savedMapName }); }}
        >
          Edit Labels
        </Btn>
      </div>
    </Card>
  );

  // ── Home view ────────────────────────────────────────────────────────────────
  const renderHome = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h2 style={{ margin: 0 }}>Saved Maps</h2>
          <p style={{ color: C.muted, margin: '4px 0 0', fontSize: 13 }}>
            {activeMap
              ? <>Active map: <strong style={{ color: C.success }}>✓ {activeMap}</strong></>
              : 'No active map selected'}
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Btn outline color={C.primary} small onClick={() => sendCommand({ action: 'list_maps' })}>↺ Refresh</Btn>
          <Btn onClick={() => { setView('wizard'); setStep(0); setNewMapName(''); setSavedMapName(''); setLabels([]); setStatusMsg(''); setIsMapping(false); }}>
            ＋ Create New Map
          </Btn>
        </div>
      </div>

      {maps.length === 0 ? (
        <Card style={{ textAlign: 'center', padding: '50px 30px' }}>
          <div style={{ fontSize: 56, marginBottom: 14 }}>🗺</div>
          <h3 style={{ margin: '0 0 8px', color: C.muted }}>No maps saved yet</h3>
          <p style={{ color: '#94a3b8', marginBottom: 24, lineHeight: 1.7, maxWidth: 380, margin: '0 auto 24px' }}>
            Create your first map by walking the robot through the environment with SLAM.
          </p>
          <Btn onClick={() => { setView('wizard'); setStep(0); }}>＋ Create First Map</Btn>
        </Card>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 16 }}>
          {maps.map(m => (
            <Card key={m.name} style={{ border: m.name === activeMap ? `2px solid ${C.success}` : `1px solid ${C.border}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: 15 }}>
                    {m.name === activeMap && <span style={{ color: C.success }}>✓ </span>}
                    {m.name}
                  </h3>
                  <p style={{ color: C.muted, fontSize: 12, margin: '3px 0 0' }}>
                    {m.label_count} room label{m.label_count !== 1 ? 's' : ''}
                  </p>
                </div>
                {m.name === activeMap && (
                  <span style={{ backgroundColor: '#dcfce7', color: '#166534', fontSize: 11, padding: '3px 9px', borderRadius: 20, fontWeight: 700 }}>
                    ACTIVE
                  </span>
                )}
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
                {m.name !== activeMap && (
                  <Btn small color={C.success} onClick={() => {
                    sendCommand({ action: 'set_active_map', name: m.name });
                  }}>
                    ✓ Use Map
                  </Btn>
                )}
                <Btn small outline color={C.primary} onClick={() => {
                  setSelectedMap(m.name); setView('manage');
                  setLabels([]); sendCommand({ action: 'list_labels', map: m.name });
                }}>
                  Edit Labels
                </Btn>
                <Btn small outline color={C.danger} onClick={() => {
                  if (window.confirm(`Delete map "${m.name}"? This cannot be undone.`)) {
                    sendCommand({ action: 'delete_map', name: m.name });
                  }
                }}>
                  Delete
                </Btn>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );

  // ── Manage existing map ──────────────────────────────────────────────────────
  const renderManage = () => (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18, flexWrap: 'wrap' }}>
        <Btn small outline color={C.primary} onClick={() => { setView('home'); setSelectedMap(null); setLabels([]); sendCommand({ action: 'list_maps' }); }}>
          ← Back
        </Btn>
        <h2 style={{ margin: 0 }}>Edit Labels: <em>{selectedMap}</em></h2>
        {selectedMap !== activeMap && (
          <Btn small color={C.success} onClick={() => {
            sendCommand({ action: 'set_active_map', name: selectedMap });
          }}>
            ✓ Set as Active Map
          </Btn>
        )}
        {selectedMap === activeMap && (
          <span style={{ backgroundColor: '#dcfce7', color: '#166534', fontSize: 12, padding: '3px 10px', borderRadius: 20, fontWeight: 700 }}>
            ACTIVE
          </span>
        )}
      </div>

      <LabelEditorWithRef
        ref={labelEditorRef}
        ros={ros}
        mapName={selectedMap}
        labels={labels}
        onLabelsChanged={() => sendCommand({ action: 'list_labels', map: selectedMap })}
        sendCommand={sendCommand}
      />
    </div>
  );

  // ── Main render ──────────────────────────────────────────────────────────────
  return (
    <div style={{ padding: 22, fontFamily: 'Arial, sans-serif', backgroundColor: C.bg, minHeight: '100vh' }}>
      <StatusBanner msg={statusMsg} type={statusType} />

      {/* ── Home ────────────────────────── */}
      {view === 'home' && renderHome()}

      {/* ── Wizard ──────────────────────── */}
      {view === 'wizard' && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, flexWrap: 'wrap' }}>
            <Btn small outline color={C.primary} onClick={() => {
              if (isMapping) sendCommand({ action: 'stop_mapping' });
              setView('home'); setStep(0); setIsMapping(false);
            }}>
              ← Cancel
            </Btn>
            <h2 style={{ margin: 0 }}>Create New Map</h2>
          </div>
          <WizardProgress />
          {step === 0 && renderStep0()}
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
        </div>
      )}

      {/* ── Manage existing map ─────────── */}
      {view === 'manage' && renderManage()}

      {/* Blink animation */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default MapManager;
