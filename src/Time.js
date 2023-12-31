import React, { useState, useEffect } from 'react';
import './Time.css'
export default function Time() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const isOpen = currentTime >= '11:00:00' && currentTime < '22:00:00';
  const isClosed = currentTime >= '22:00:00' || currentTime < '11:00:00'; 

  return (
    <div>
      {isOpen && (
        <div className="time-open">
          <p style={{ color: '#007B2A' }}>Open Now</p>
          <p style={{ color: '#777777' }}> - Closes 10 PM</p>
        </div>
      )}
      {isClosed && (
        <div className="time-closes">
          <p style={{ color: '#FF0000' }}>Closed</p>
          <p style={{ color: '#777777' }}> - Open 11AM Tomorrow</p>
        </div>
      )}
    </div>
  );
}

