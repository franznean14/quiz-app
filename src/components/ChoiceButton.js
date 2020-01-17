import React from 'react';

const ChoiceButton = ({ choice, index, classToApply, checkAnswer }) => {
  return (
    <div
      className={`choice-container ${classToApply}`}
      onClick={() => checkAnswer(index)}
    >
      <p className='choice-prefix'>{index}</p>
      <p
        className='choice-text'
        dangerouslySetInnerHTML={{ __html: choice }}
      ></p>
    </div>
  );
};

export default ChoiceButton;
