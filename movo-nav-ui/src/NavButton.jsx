import React, { useEffect, useRef, useState } from 'react';
import ROSLIB from 'roslib';

const NavButton = ({ waypointName, ros, isArrived, onNavigating, disabled = false }) => {
  const navTopicRef = useRef(null);
  const [navigating, setNavigating] = useState(false);

  useEffect(() => {
    if (!ros) return;

    navTopicRef.current = new ROSLIB.Topic({
      ros,
      name: '/ui_navigation_command',
      messageType: 'std_msgs/String',
    });
  }, [ros]);

  // When the robot arrives at this destination, stop showing 'navigating'
  useEffect(() => {
    if (isArrived) setNavigating(false);
  }, [isArrived]);

  const handleNavigate = () => {
    if (!navTopicRef.current) return;
    navTopicRef.current.publish(new ROSLIB.Message({ data: `go:${waypointName}` }));
    setNavigating(true);
    if (onNavigating) onNavigating(waypointName);
  };

  const handleArrived = () => {
    if (!navTopicRef.current) return;
    navTopicRef.current.publish(new ROSLIB.Message({ data: `confirm:${waypointName}` }));
    setNavigating(false);
  };

  // Derive display state from props + local state
  const status = isArrived ? 'arrived' : navigating ? 'navigating' : 'idle';

  const buttonStyles = {
    idle:       { backgroundColor: '#b49b5f', label: `Go to ${waypointName}` },
    navigating: { backgroundColor: '#c97070', label: `Navigating to ${waypointName}...` },                                                                          arrived:    { backgroundColor: '#2196F3', label: `✓ Arrived at ${waypointName}` },                                                                            };

  const { backgroundColor, label } = buttonStyles[status];

  const isDisabled = disabled || status === 'navigating';

  return (
    <div style={{ margin: '15px 0' }}>
      <button
        onClick={handleNavigate}
        disabled={isDisabled}
        style={{
          padding: '16px 24px',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          fontSize: '1.25rem',
          borderRadius: '1.25rem',
          backgroundColor: disabled ? '#4b5563' : backgroundColor,
          color: 'white',
          border: 'none',
          width: '100%',
          opacity: isDisabled ? 0.6 : 1,
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
        }}
      >
        {disabled ? `⏳ ${waypointName}` : label}
      </button>

      {status === 'arrived' && (
        <button
          onClick={handleArrived}
          style={{
            marginTop: '12px',
            padding: '16px 24px',
            cursor: 'pointer',
            fontSize: '1.25rem',
            fontWeight: '600',
            borderRadius: '1.25rem',
            backgroundColor: '#059669',
            color: 'white',
            border: 'none',
            width: '100%',
            animation: 'pulse 1.5s infinite',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
          }}
        >
          ✅ Yes, I've Arrived — Send Robot Back
        </button>
      )}
    </div>
  );
};

export default NavButton;
