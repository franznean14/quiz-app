import React from 'react';
import ProgressBar from './ProgressBar';

const HUD = ({ score, questionNumber }) => {
  return (
    <div id='hud'>
      <div className='hud-item'>
        <p className='hud-prefix'>{questionNumber}/10</p>
        <ProgressBar current={questionNumber} max={10} />
      </div>
      <div className='hud-item'>
        <p className='hud-prefix'>Score</p>
        <h1 className='hud-main-text'>{score}</h1>
      </div>
    </div>
  );
};

export default HUD;
