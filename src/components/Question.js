import React, { useState } from 'react';
// import ChoiceButton from './ChoiceButton';

const Question = ({
  question: { question, answerChoices, answer },
  changeQuestion
}) => {
  const [classToApply, setClassToApply] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [answering, setAnswering] = useState(false);

  const checkAnswer = selectedAnswer => {
    if (answering) return;
    setAnswering(true);
    setSelectedAnswer(selectedAnswer);

    const classToApply =
      selectedAnswer === answer ? 'correct pulse' : 'incorrect shake';
    setClassToApply(classToApply);

    const bonus = selectedAnswer === answer ? 10 : 0;

    setTimeout(() => {
      setSelectedAnswer(-1);
      setAnswering(false);
      changeQuestion(bonus);
    }, 1000);
  };

  return (
    <>
      <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>

      {answerChoices.map((choice, index) => (
        <div
          key={index}
          className={`choice-container animated ${selectedAnswer === index &&
            classToApply}`}
          onClick={() => checkAnswer(index)}
        >
          <p className='choice-prefix'>{index + 1}</p>
          <p
            className='choice-text'
            dangerouslySetInnerHTML={{ __html: choice }}
          ></p>
        </div>
      ))}
    </>
  );
};

export default Question;

// <ChoiceButton
//   key={choice}
//   choice={choice}
//   index={index + 1}
//   classToApply={selectedAnswer === index && classToApply}
//   checkAnswer={checkAnswer}
// />
