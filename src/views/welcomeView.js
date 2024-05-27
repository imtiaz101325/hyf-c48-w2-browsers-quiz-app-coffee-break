import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Welcome</h1>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  return element;
};

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