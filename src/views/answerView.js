
import { quizData } from '../data.js';
import { nextQuestion } from '../pages/questionPage.js';
import { ANSWERS_LIST_ID } from '../constants.js';
import { QUIZ_AREA } from '../constants.js';

export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = `${key}: ${answerText}`;
   element.addEventListener('click', () => handleAnswerClick(key, element));

  return element;
};

export const handleAnswerClick = (selectedKey,selectedElement) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct;

  if (selectedKey === correctAnswer) {
    quizData.score += 1;
    selectedElement.style.background='green'
    selectedElement.style.color='white'
    console.log(selectedElement)
  } else {
    selectedElement.classList.toggle('incorrect-answer');
    selectedElement.style.background='#e63946'
    selectedElement.style.color='white'
  }
  setTimeout(nextQuestion, 2000);
};
