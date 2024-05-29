import {
  QUIZ_AREA,
  EXIT_BUTTON,
  START_BUTTON,
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  CONTAINER_START,
  GUID_SECTION,
} from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  // userInterface.innerHTML = '';

  // const welcomeElement = createWelcomeElement();
  // userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  initQuestionPage();
};
const guid = document.getElementById(GUID_SECTION);
const startcontainer = document.getElementById(CONTAINER_START);
const exitguid = document.getElementById(EXIT_BUTTON);
const startqu = document.getElementById(START_BUTTON);
const quizarea = document.getElementById(QUIZ_AREA);

const startbutton = document.getElementById(START_QUIZ_BUTTON_ID);
startbutton.addEventListener('click', () => {
  console.log('djc');
  guid.style.display = 'block';
  startcontainer.style.display = 'none';
});
startqu.addEventListener('click', () => {
  quizarea.style.display = 'block';
  guid.style.display = 'none';
});
exitguid.addEventListener('click', () => {
  startcontainer.style.display = 'block';
  guid.style.display = 'none';
});
