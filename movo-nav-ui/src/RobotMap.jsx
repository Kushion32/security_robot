import React, { useEffect, useRef, useState, useCallback } from 'react';
import ROSLIB from 'roslib';

const RobotMap = ({ ros, amclStartPose }) => {
  const canvasRef = useRef(null);
  const mapDataRef = useRef(null);       // raw OccupancyGrid
  const robotPoseRef = useRef(null);     // {x, y, theta}
  const goalPoseRef = useRef(null);      // {x, y}
  const pathRef = useRef([]);            // [{x, y}, ...]
  const animFrameRef = useRef(null);
  const amclStartRef = useRef(amclStartPose);
  useEffect(() => { amclStartRef.current = amclStartPose; }, [amclStartPose]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [statusText, setStatusText] = useState('Waiting for map...');

  // World coords -> canvas pixel coords
  const worldToCanvas = useCallback((wx, wy, map, canvas) => {
    const { resolution, origin } = map;
    const mapX = (wx - origin.x) / resolution;
    const mapY = (wy - origin.y) / resolution;
    // Map Y is inverted (map origin is bottom-left, canvas is top-left)
    const cx = (mapX / map.width) * canvas.width;
    const cy = canvas.height - (mapY / map.height) * canvas.height;
    return { cx, cy };
  }, []);

  // Draw everything onto the canvas
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const map = mapDataRef.current;
    if (!map) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // --- Draw occupancy grid ---
    const imageData = ctx.createImageData(map.width, map.height);
    for (let i = 0; i < map.data.length; i++) {
      const cell = map.data[i];
      let r, g, b;
      if (cell === -1) {
        // Unknown - grey
        r = 180; g = 180; b = 180;
      } else if (cell === 0) {
        // Free - white
        r = 255; g = 255; b = 255;
      } else {
        // Occupied - black (scale with occupancy)
        const shade = Math.max(0, 255 - cell * 2.55);
        r = shade; g = shade; b = shade;
      }
      // Map data is stored row-major, row 0 = bottom of map
      // We flip vertically when writing to imageData
      const mapRow = Math.floor(i / map.width);
      const mapCol = i % map.width;
      const flippedRow = map.height - 1 - mapRow;
      const idx = (flippedRow * map.width + mapCol) * 4;
      imageData.data[idx]     = r;
      imageData.data[idx + 1] = g;
      imageData.data[idx + 2] = b;
      imageData.data[idx + 3] = 255;
    }

    // Scale map to canvas using offscreen canvas
    const offscreen = document.createElement('canvas');
    offscreen.width = map.width;
    offscreen.height = map.height;
    offscreen.getContext('2d').putImageData(imageData, 0, 0);
    ctx.drawImage(offscreen, 0, 0, canvas.width, canvas.height);

    // --- Draw planned path ---
    const path = pathRef.current;
    if (path.length > 1) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 120, 255, 0.6)';
      ctx.lineWidth = 2;
      const first = worldToCanvas(path[0].x, path[0].y, map, canvas);
      ctx.moveTo(first.cx, first.cy);
      for (let i = 1; i < path.length; i++) {
        const { cx, cy } = worldToCanvas(path[i].x, path[i].y, map, canvas);
        ctx.lineTo(cx, cy);
      }
      ctx.stroke();
    }

    // --- Draw goal marker ---
    if (goalPoseRef.current) {
      const { cx, cy } = worldToCanvas(goalPoseRef.current.x, goalPoseRef.current.y, map, canvas);
      ctx.beginPath();
      ctx.arc(cx, cy, 8, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(255, 60, 60, 0.85)';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
      // Goal label
      ctx.font = 'bold 11px Arial';
      ctx.fillStyle = '#ff3c3c';
      ctx.fillText('GOAL', cx + 10, cy - 6);
    }

    // --- Draw AMCL start position marker ---
    const startPose = amclStartRef.current;
    if (startPose) {
      const { cx, cy } = worldToCanvas(startPose.x, startPose.y, map, canvas);
      // Outer dashed ring
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, 2 * Math.PI);
      ctx.strokeStyle = '#ff9500';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([5, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
      // Inner filled circle
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(255, 149, 0, 0.7)';
      ctx.fill();
      // Label
      ctx.font = 'bold 11px Arial';
      ctx.fillStyle = '#ff9500';
      ctx.fillText('START', cx + 16, cy + 4);
    }

    // --- Draw robot arrow ---
    if (robotPoseRef.current) {
      const { x, y, theta } = robotPoseRef.current;
      const { cx, cy } = worldToCanvas(x, y, map, canvas);

      ctx.save();
      ctx.translate(cx, cy);
      // Canvas Y is flipped relative to ROS, so negate theta
      ctx.rotate(-theta);

      // Draw arrow body
      const size = 14;
      ctx.beginPath();
      ctx.moveTo(size, 0);           // tip
      ctx.lineTo(-size * 0.6, -size * 0.5);
      ctx.lineTo(-size * 0.3, 0);
      ctx.lineTo(-size * 0.6, size * 0.5);
      ctx.closePath();
      ctx.fillStyle = '#00CC44';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.restore();

      // Robot dot at centre
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    }
  }, [worldToCanvas]);

  useEffect(() => {
    if (!ros) return;

    // ── Subscribe to static map ─────────────────────────────────────────────
    const mapSub = new ROSLIB.Topic({
      ros,
      name: '/map',
      messageType: 'nav_msgs/OccupancyGrid',
      compression: 'none',
      throttle_rate: 0,
    });

    mapSub.subscribe((msg) => {
      mapDataRef.current = {
        width: msg.info.width,
        height: msg.info.height,
        resolution: msg.info.resolution,
        origin: {
          x: msg.info.origin.position.x,
          y: msg.info.origin.position.y,
        },
        data: msg.data,
      };
      setMapLoaded(true);
      setStatusText('Map loaded');
    });

    // ── Subscribe to robot pose (AMCL) ─────────────────────────────────────
    const poseSub = new ROSLIB.Topic({
      ros,
      name: '/amcl_pose',
      messageType: 'geometry_msgs/PoseWithCovarianceStamped',
      throttle_rate: 200,
    });

    poseSub.subscribe((msg) => {
      const { x, y } = msg.pose.pose.position;
      const { z, w } = msg.pose.pose.orientation;
      // Convert quaternion (z, w) to yaw angle
      const theta = 2 * Math.atan2(z, w);
      robotPoseRef.current = { x, y, theta };
    });

    // ── Subscribe to current goal ───────────────────────────────────────────
    const goalSub = new ROSLIB.Topic({
      ros,
      name: '/move_base/current_goal',
      messageType: 'geometry_msgs/PoseStamped',
      throttle_rate: 500,
    });

    goalSub.subscribe((msg) => {
      goalPoseRef.current = {
        x: msg.pose.position.x,
        y: msg.pose.position.y,
      };
    });

    // ── Subscribe to planned path ───────────────────────────────────────────
    const pathSub = new ROSLIB.Topic({
      ros,
      name: '/move_base/NavfnROS/plan',
      messageType: 'nav_msgs/Path',
      throttle_rate: 1000,
    });

    pathSub.subscribe((msg) => {
      // Downsample path to avoid drawing thousands of points
      const poses = msg.poses;
      const step = Math.max(1, Math.floor(poses.length / 200));
      pathRef.current = poses
        .filter((_, i) => i % step === 0)
        .map(p => ({ x: p.pose.position.x, y: p.pose.position.y }));
    });

    // ── Render loop ─────────────────────────────────────────────────────────
    const renderLoop = () => {
      draw();
      animFrameRef.current = requestAnimationFrame(renderLoop);
    };
    animFrameRef.current = requestAnimationFrame(renderLoop);

    return () => {
      mapSub.unsubscribe();
      poseSub.unsubscribe();
      goalSub.unsubscribe();
      pathSub.unsubscribe();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [ros, draw]);

  return (
    <div style={{
      border: '2px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '1rem',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      padding: '24px',
      minWidth: '340px',
      flex: '1 1 340px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>                                                    <h3 style={{ color: 'white', margin: 0, fontSize: '1.25rem', fontWeight: 500 }}>🗺 Live Robot Map</h3>
        <span style={{
          fontSize: '12px',
          padding: '3px 8px',
          borderRadius: '4px',
          backgroundColor: mapLoaded ? '#1a5c2e' : '#5c1a1a',
          color: mapLoaded ? '#4cff80' : '#ff6b6b',
        }}>
          {statusText}
        </span>
      </div>

      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '4px',
          display: 'block',
          imageRendering: 'pixelated',
          cursor: 'default',
          backgroundColor: '#b4b4b4',
        }}
      />

      {/* Legend */}
      <div style={{ display: 'flex', gap: '16px', marginTop: '8px', flexWrap: 'wrap' }}>
        {[
          { color: '#00CC44', label: 'Robot' },
          { color: '#ff3c3c', label: 'Goal' },
          { color: '#ff9500', label: 'AMCL start' },
          { color: 'rgba(0, 120, 255, 0.7)', label: 'Planned path' },
          { color: '#fff',    label: 'Free space' },
          { color: '#000',    label: 'Obstacle' },
          { color: '#b4b4b4', label: 'Unknown' },
        ].map(({ color, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: color, border: '1px solid #555' }} />
            <span style={{ color: '#ccc', fontSize: '11px' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RobotMap;
