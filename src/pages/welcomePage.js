import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID,RESULT_CONTAINER,QUESTION_CONTAINER,SCORE_ELEMENT  } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { quizData } from '../data.js';
export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);
  let score = 0;
  createWelcomeElement();
  RESULT_CONTAINER.classList.add('hidden');
  QUESTION_CONTAINER.classList.remove('hidden');
  SCORE_ELEMENT.innerText = score;
  setNextQuestion();
  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  quizData.currentQuestionIndex = 0;
  
  initQuestionPage();
};
