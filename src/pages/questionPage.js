import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

let score = 0;

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.addEventListener('click', () => handleAnswerClick(key, currentQuestion.correct));
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', showResultAndNextQuestion);
};

const handleAnswerClick = (selectedKey, correctKey) => {
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  answersListElement.dataset.selectedAnswer = selectedKey; 

  if (selectedKey === correctKey) {
    score += 2;
  }

  answersListElement.childNodes.forEach(answer => {
    answer.style.pointerEvents = 'none';
  });
};
 
const showResultAndNextQuestion = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  const selectedKey = answersListElement.dataset.selectedAnswer; // Seçilen cevabı al
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const correctKey = currentQuestion.correct;

  const feedbackElement = document.createElement('div');
  if (selectedKey === correctKey) {
    feedbackElement.textContent = 'Correct!';
    feedbackElement.style.color = 'green';
  } else {
    feedbackElement.textContent = 'Wrong!';
    feedbackElement.style.color = 'red';
  }
  userInterface.appendChild(feedbackElement);

  setTimeout(() => {
    userInterface.removeChild(feedbackElement);


    quizData.currentQuestionIndex += 1;

    if (quizData.currentQuestionIndex < quizData.questions.length) {
      initQuestionPage();
    } else {
      userInterface.innerHTML = `<h1>Quiz Finished!</h1><p>Your score: ${score}</p>`;
    }
  }, 2000); 
};

initQuestionPage();
