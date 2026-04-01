import React, { useEffect, useState } from 'react';
import ROSLIB from 'roslib';

const VideoFeed = ({ ros, topicName = '/camera/color/image_raw/compressed', title = 'Camera Feed' }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (!ros) return;

    // Subscribe to compressed image topic
    const imageListener = new ROSLIB.Topic({
      ros: ros,
      name: topicName,
      messageType: 'sensor_msgs/CompressedImage'
    });

    imageListener.subscribe((message) => {
      // Convert base64 image data to displayable format
      const imageData = `data:image/jpeg;base64,${message.data}`;
      setImageSrc(imageData);
    });

    return () => {
      imageListener.unsubscribe();
    };
  }, [ros, topicName]);

  return (
    <div style={{
      border: '2px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '1rem',
      padding: '24px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      maxWidth: '640px',
      margin: '10px 0'
    }}>
      <h3 style={{ color: 'white', margin: '0 0 16px 0', fontSize: '1.25rem', fontWeight: 500 }}>{title}</h3>
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={title} 
          style={{ 
            width: '100%', 
            height: 'auto',
            borderRadius: '4px'
          }}
        />
      ) : (
        <div style={{ 
          color: '#999', 
          padding: '40px', 
          textAlign: 'center' 
        }}>
          Waiting for {title.toLowerCase()}...
        </div>
      )}
      <p style={{ 
        color: '#999', 
        fontSize: '12px', 
        margin: '5px 0 0 0' 
      }}>
        Topic: {topicName}
      </p>
    </div>
  );
};

export default VideoFeed;
