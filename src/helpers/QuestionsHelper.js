export const loadQuestions = async (
  amount = 10,
  category = 9,
  difficulty = 'easy',
  type = 'multiple'
) => {
  const TRIVIA_URL = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
  try {
    const res = await fetch(TRIVIA_URL);
    const { results } = await res.json();
    return convertQuestions(results);
  } catch (error) {
    console.error(error);
  }
};

const convertQuestions = rawQuestions => {
  return rawQuestions.map(question => {
    const formattedQuestion = {
      question: question.question,
      answerChoices: question.incorrect_answers
    };
    formattedQuestion.answer = Math.floor(Math.random() * 4);
    formattedQuestion.answerChoices.splice(
      formattedQuestion.answer,
      0,
      question.correct_answer
    );
    return formattedQuestion;
  });
};
