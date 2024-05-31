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
  // const userInterface = document.getElementById(USER_INTERFACE_ID);
  // userInterface.innerHTML = '';

  // const welcomeElement = createWelcomeElement();
  // userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  quizData.currentQuestionIndex = 0;

  initQuestionPage();
};
const guid = document.getElementById(GUID_SECTION);
const startcontainer = document.getElementById(CONTAINER_START);
const exitguid = document.getElementById(EXIT_BUTTON);
const startqu = document.getElementById(START_BUTTON);
const quizarea = document.getElementById(QUIZ_AREA);
const body=document.querySelector('body')
const startbutton = document.getElementById(START_QUIZ_BUTTON_ID);

startbutton.addEventListener('click', () => {
  guid.style.display = 'block';
  body.style.background='#260701'
  startcontainer.style.display = 'none';
  initQuestionPage();
  startQuiz();
});
startqu.addEventListener('click', () => {
  quizarea.style.display = 'block';
  guid.style.display = 'none';
  startQuiz();
  initQuestionPage();
});
exitguid.addEventListener('click', () => {
  startcontainer.style.display = 'block';
  guid.style.display = 'none';
  initQuestionPage();
  startQuiz();
});

