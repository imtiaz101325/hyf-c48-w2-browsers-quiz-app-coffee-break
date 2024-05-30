
import { quizData } from '../data.js';
import { nextQuestion } from '../pages/questionPage.js';
import { ANSWERS_LIST_ID } from '../constants.js';
import { QUIZ_AREA } from '../constants.js';

export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = `${key}: ${answerText}`;
  return element;
};

export const handleAnswerClick = (selectedKey) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct;

  // const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  // // answersListElement.childNodes.forEach((answer) => {
  
  // });

  if (selectedKey === correctAnswer) {
    quizData.score += 1;
 
  }

  nextQuestion()
}