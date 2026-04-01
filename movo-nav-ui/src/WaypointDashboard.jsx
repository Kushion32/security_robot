import React, { useEffect, useState } from 'react';
import ROSLIB from 'roslib';
import NavButton from './NavButton';
import VideoFeed from './VideoFeed';
import RobotMap from './RobotMap';

const WaypointDashboard = ({ ros, connected }) => {
  const [activeDestination, setActiveDestination] = useState(null);
  const [arrivedDestination, setArrivedDestination] = useState(null);
  const [locations, setLocations] = useState([]);
  const [navReady, setNavReady] = useState(false);
  const [robotPose, setRobotPose] = useState(null);
  const [peopleCount, setPeopleCount] = useState(0);

  // AMCL configured start position (from amcl.yaml initial_pose_x/y)
  const AMCL_START = { x: 1.41, y: 1.83 };

  // Subscribe to the latched waypoints list published by goto_points.py
  useEffect(() => {
    if (!ros) return;
    const waypointsSub = new ROSLIB.Topic({
      ros,
      name: '/ui_waypoints_list',
      messageType: 'std_msgs/String',
    });
    waypointsSub.subscribe((msg) => {
      try { setLocations(JSON.parse(msg.data)); }
      catch (e) { console.error('Bad waypoints JSON', e); }
    });
    // Nav ready status — latched bool from goto_points.py
    const navReadySub = new ROSLIB.Topic({
      ros,
      name: '/ui_nav_ready',
      messageType: 'std_msgs/Bool',
    });
    navReadySub.subscribe((msg) => setNavReady(msg.data));
    const amclPoseSub = new ROSLIB.Topic({
      ros,
      name: '/amcl_pose',
      messageType: 'geometry_msgs/PoseWithCovarianceStamped',
      throttle_rate: 500,
    });
    amclPoseSub.subscribe((msg) => {
      const { x, y } = msg.pose.pose.position;
      const { z, w } = msg.pose.pose.orientation;
      const thetaDeg = 2 * Math.atan2(z, w) * (180 / Math.PI);
      setRobotPose({ x, y, thetaDeg });
    });
    const peopleCountSub = new ROSLIB.Topic({
      ros,
      name: '/people/count',
      messageType: 'std_msgs/Int32',
    });
    peopleCountSub.subscribe((msg) => setPeopleCount(msg.data));

    return () => { waypointsSub.unsubscribe(); navReadySub.unsubscribe(); amclPoseSub.unsubscribe(); peopleCountSub.unsubscribe(); };
  }, [ros]);

  // Single subscription to arrived topic — avoids each button fighting over latched state
  useEffect(() => {
    if (!ros) return;

    // Primary: Python backend publishes waypoint name when robot arrives
    const arrivedSub = new ROSLIB.Topic({
      ros,
      name: '/ui_robot_arrived',
      messageType: 'std_msgs/String',
    });
    arrivedSub.subscribe((msg) => {
      const dest = msg.data || null;
      setArrivedDestination(dest);
      if (!dest) setActiveDestination(null);
    });

    // Fallback: watch the action result directly in case the Python message is missed
    const resultSub = new ROSLIB.Topic({
      ros,
      name: '/movo_move_base/result',
      messageType: 'move_base_msgs/MoveBaseActionResult',
    });
    resultSub.subscribe((msg) => {
      if (msg.status && msg.status.status === 3) {
        // SUCCEEDED — use the activeDestination we already know
        setArrivedDestination(dest => dest || activeDestination);
      }
    });

    return () => {
      arrivedSub.unsubscribe();
      resultSub.unsubscribe();
    };
  }, [ros, activeDestination]);

  return (
    <div style={{
      padding: '40px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
      backgroundColor: '#0a1724',
      color: 'white',
      minHeight: '100vh',
    }}>
      <h2 style={{ marginTop: 0, fontSize: '2.5rem', fontWeight: 300, letterSpacing: '1px' }}>Operator Control</h2>

      {/* Active navigation status */}
      {activeDestination && (
        <div style={{
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '5px',
          backgroundColor: '#d4edda',
          color: '#155724',
          border: '1px solid #c3e6cb',
          fontWeight: 'bold',
        }}>
          🚗 Navigating to: <em>{activeDestination}</em>
        </div>
      )}

      {/* Main layout: map takes left, controls take right */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

        {/* Live Map */}
        <RobotMap ros={ros} amclStartPose={AMCL_START} />

        {/* Right column: navigation buttons + video */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: '0 0 320px' }}>

          {/* People count panel */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '24px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          }}>
            <h3 style={{ margin: '0 0 15px 0', fontSize: '1.25rem', fontWeight: 
500, color: 'white' }}>👥 People Detected</h3>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#b49b5f' }}>                                                                                       {peopleCount}
            </div>
          </div>

          {/* Positioning panel */}
          {(() => {
            const dist = robotPose
              ? Math.sqrt((robotPose.x - AMCL_START.x) ** 2 + (robotPose.y - AMCL_START.y) ** 2)                                                                              : null;
            const inPosition = dist !== null && dist < 0.5;
            return (
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1rem',
                padding: '24px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                <h3 style={{ margin: '0 0 15px 0', fontSize: '1.25rem', fontWeight: 500, color: 'white' }}>📍 Robot Position</h3>                                             {robotPose ? (
                  <>
                    <div style={{ marginBottom: 12 }}>
                      <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Current:&nbsp;</span>                                                                                       <code style={{ fontSize: 13, background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px' }}>                                                          x={robotPose.x.toFixed(3)}&nbsp;&nbsp;
                        y={robotPose.y.toFixed(3)}&nbsp;&nbsp;
                        θ={robotPose.thetaDeg.toFixed(1)}°
                      </code>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>AMCL start:&nbsp;</span>                                                                                    <code style={{ fontSize: 13, background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px' }}>                                                          x={AMCL_START.x.toFixed(2)}&nbsp;&nbsp;
                        y={AMCL_START.y.toFixed(2)}
                      </code>
                    </div>
                    <div style={{
                      padding: '12px 16px',
                      borderRadius: 8,
                      backgroundColor: inPosition ? 'rgba(40, 167, 69, 0.2)' : 'rgba(255, 193, 7, 0.2)',                                                                              border: `1px solid ${inPosition ? '#28a745' : '#ffc107'}`,
                      color: inPosition ? '#85e098' : '#ffd351',
                      fontWeight: 500,
                    }}>
                      {inPosition
                        ? `✅ In position (${dist.toFixed(2)}m away)`
                        : `⚠️ ${dist.toFixed(2)}m from start — drive robot to orange marker`}                                                                                        </div>
                  </>
                ) : (
                  <div style={{ color: 'rgba(255, 255, 255, 0.4)', fontStyle: 'italic' }}>                                                                                        {connected ? 'Waiting for AMCL pose…' : 'Connect to robot to see position.'}                                                                                      </div>
                )}
              </div>
            );
          })()}

          {/* Navigation controls */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '24px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '1.25rem', fontWeight: 500, color: 'white' }}>Navigation</h3>                                            <p style={{ margin: '0 0 20px 0', color: 'rgba(255, 255, 255, 0.7)'
, fontSize: '14px', lineHeight: 1.5 }}>                                                       Click a button to send the robot to that location.
              When the robot arrives, confirm you're there to send it back.
            </p>
            {connected && !navReady && locations.length > 0 && (
              <div style={{
                padding: '8px 12px', marginBottom: 10, borderRadius: 5,
                backgroundColor: '#fff3cd', border: '1px solid #ffc107',
                color: '#856404', fontSize: 12,
              }}>
                ⏳ Connecting to navigation stack… buttons will enable shortly.
              </div>
            )}
            {locations.length === 0 ? (
              <p style={{ color: '#888', fontSize: 13, fontStyle: 'italic' }}>
                {connected ? 'Waiting for waypoints from robot…' : 'Connect to robot to load waypoints.'}
              </p>
            ) : (
              locations.map(loc => (
                <NavButton
                  key={loc}
                  waypointName={loc}
                  ros={ros}
                  isArrived={arrivedDestination === loc}
                  disabled={!navReady}
                  onNavigating={(name) => { setActiveDestination(name); setArrivedDestination(null); }}
                />
              ))
            )}
          </div>

          {/* Video feeds */}
          <VideoFeed
            ros={ros}
            topicName="/camera/color/image_raw/compressed"
            title="Camera Feed"
          />
          <VideoFeed
            ros={ros}
            topicName="/face_auth/overlay/compressed"
            title="Face Authentication"
          />
        </div>
      </div>
    </div>
  );
};

export default WaypointDashboard;
