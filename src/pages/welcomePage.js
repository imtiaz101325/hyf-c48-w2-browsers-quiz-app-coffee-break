import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  initQuestionPage();
};



/**
 * Create the welcome screen
 * @returns {Element}
 */

const QuizeArea=document.querySelector('.quizarea')
const ExitButton=document.querySelector('.exit')
const ContinueButton=document.querySelector('.continue')
const container=document.querySelector('.container')
 const StartButton=document.querySelector('.container button')
 const guide=document.querySelector('.guide');
 StartButton.addEventListener('click',()=>{
  container.style.display='none';
  guide.style.display='block'
}) 
ExitButton.addEventListener('click',()=>{
  guide.style.display='none'
  container.style.display='block'
}) 
ContinueButton.addEventListener('click',()=>{
  guide.style.display='none'
QuizeArea.style.display='block'
document.body.style.background='#10002b'


})