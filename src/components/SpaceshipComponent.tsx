"use client";

import React, { useState, useEffect } from 'react';

export default function SpaceshipComponent(): React.JSX.Element {
  const [rotation, setRotation] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const mouseX = e.clientX;
      
      // Calculate rotation based on mouse X position
      // Map mouse position (0 to windowWidth) to rotation (-90 to 90 degrees)
      const normalizedX = mouseX / windowWidth; // 0 to 1
      const rotationValue = (normalizedX - 0.5) * 180; // -90 to 90
      
      setRotation(rotationValue);
    };

    const handleMouseDown = () => {
      setIsActive(true);
    };

    const handleMouseUp = () => {
      setIsActive(false);
    };

    const handleMouseLeave = () => {
      setRotation(0);
    };

    // Add event listeners to document
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      className={`spaceship-visual-container ${isActive ? 'active' : ''}`}
      style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
    >
      <div className="star-field">
        <div className="stars stars-sm"></div>
        <div className="stars stars-md"></div>
        <div className="stars stars-lg"></div>
      </div>

      <div className="ship">
        <div className="wrapper">
          <div className="body side left"></div>
          <div className="body main">
            <div className="wing left"></div>
            <div className="wing right"></div>
            <div className="booster"></div>
            <div className="exhaust"></div>
          </div>
          <div className="body side right"></div>
        </div>
      </div>
    </div>
  );
} 