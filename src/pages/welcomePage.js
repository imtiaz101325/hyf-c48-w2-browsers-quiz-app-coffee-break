import {
  QUIZ_AREA,
  EXIT_BUTTON,
  START_BUTTON,
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  CONTAINER_START,
  GUID_SECTION,
} from '../constants.js';
import { quizData } from '../data.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  quizData.currentQuestionIndex = 0;

  initQuestionPage();
};
const guid = document.getElementById(GUID_SECTION);
const startContainer = document.getElementById(CONTAINER_START);
const exitGuide = document.getElementById(EXIT_BUTTON);
const startQuestions = document.getElementById(START_BUTTON);
const quizArea = document.getElementById(QUIZ_AREA);
const body = document.querySelector('body');
const startButton = document.getElementById(START_QUIZ_BUTTON_ID);

startButton.addEventListener('click', () => {
  guid.style.display = 'block';
  body.style.background = '#260701';
  startContainer.style.display = 'none';
  initQuestionPage();
  startQuiz();
});
startQuestions.addEventListener('click', () => {
  quizArea.style.display = 'block';
  guid.style.display = 'none';
  startQuiz();
  initQuestionPage();
});
exitGuide.addEventListener('click', () => {
  startContainer.style.display = 'block';
  guid.style.display = 'none';
  initQuestionPage();
  startQuiz();
});
