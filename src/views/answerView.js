import { quizData } from '../data.js';
import { nextQuestion } from '../pages/questionPage.js';
import { POPUP_ID } from '../constants.js';
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = `${key}: ${answerText}`;
  element.addEventListener('click', () => handleAnswerClick(key));
  return element;
};
export const handleAnswerClick = (selectedKey) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct;

  if (selectedKey === correctAnswer) {
    quizData.score += 1;
    const popup = document.getElementById(POPUP_ID);
    popup.style.display = 'block';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 1000);

    console.log('Correct!');
  } else {
    console.log('Wrong!');
  }

  nextQuestion();
};
