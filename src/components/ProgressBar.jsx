import React from 'react';

const ProgressBar = ({ percentageValue }) => {
    const percentage = parseInt(percentageValue, 10); // Remove '%' and convert to integer
  
    const progressStyles = {
      width: `${percentage}%`,
      transition: 'width 0.5s ease-in-out'
    };
  
    let color;
    if (percentage <= 25) {
      color = 'red-500';
    } else if (percentage > 25 && percentage <= 50) {
      color = 'orange-400';
    } else if (percentage > 50 && percentage <= 75) {
      color = 'cyan-400';
    } else {
      color = 'green-500';
    }
  
    return (
      <div className="relative w-20 h-1 bg-gray-200 rounded-md">
        <div
          style={progressStyles}
          className={`absolute top-0 left-0 bottom-0 bg-${color} rounded-xl`}
        />
      </div>
    );
  };
  
  export default ProgressBar;