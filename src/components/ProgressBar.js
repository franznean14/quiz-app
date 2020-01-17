import React from 'react';

const ProgressBar = ({ current, max }) => {
  const width = (current / max) * 100;
  return (
    <div id='progressBar' className={`animated`}>
      <div id='progressBarFull' style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default ProgressBar;
