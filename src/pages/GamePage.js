import React, { useState, useEffect, useCallback } from 'react';

import { Question, HUD, SaveScoreForm } from '../Components';
import { loadQuestions, useInterval } from '../Helpers';

const GamePage = ({ history }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [done, setDone] = useState(false);
  const [timeSpentAnswering, setTimeSpentAnswering] = useState(20);

  useInterval(() => {
    if (timeSpentAnswering > 1) {
      setTimeSpentAnswering(timeSpentAnswering - 1);
    } else {
    }
  }, [currentQuestion]);
  useEffect(() => {
    loadQuestions()
      .then(setQuestions)
      .catch(console.error);
  }, []);

  const changeQuestion = useCallback(
    (bonus = 0) => {
      if (questions.length === 0) {
        setDone(true);
        setScore(score + bonus);
      }
      setTimeSpentAnswering(20);
      const randomQuestionIndex = Math.floor(Math.random() * questions.length);
      const currentQuestion = questions[randomQuestionIndex];
      const remainingQuestions = [...questions];
      remainingQuestions.splice(randomQuestionIndex, 1);

      setQuestions(remainingQuestions);
      setCurrentQuestion(currentQuestion);
      setIsLoading(false);
      setScore(score + bonus * timeSpentAnswering);
      setQuestionNumber(questionNumber + 1);
    },
    [
      score,
      questionNumber,
      questions,
      setQuestions,
      setIsLoading,
      setCurrentQuestion,
      setQuestionNumber,
      timeSpentAnswering
    ]
  );

  const scoreSaved = () => {
    history.push('/');
  };

  useEffect(() => {
    if (!currentQuestion && questions.length) {
      changeQuestion();
    }
  }, [currentQuestion, questions, changeQuestion]);

  return (
    <>
      {isLoading && !done && <div className='loader'></div>}
      {!done && !isLoading && currentQuestion && (
        <>
          <HUD score={score} questionNumber={questionNumber} />
          <Question
            question={currentQuestion}
            changeQuestion={changeQuestion}
          />
        </>
      )}
      {done && <SaveScoreForm score={score} scoreSaved={scoreSaved} />}
    </>
  );
};

export default GamePage;
