import React, { useState, useEffect } from 'react';

const TopNavbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    }, 1000); 

    
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="bg-gray-300 p-4 flex justify-between items-center">
      <div className="flex items-center" style={{ opacity: '25%' }}>
        <span className="text-6xl">Review Inbox</span>
      </div>
      <div>
        <span className="text-xl font-medium">{currentTime}</span>
      </div>
    </div>
  );
};

export default TopNavbar;
