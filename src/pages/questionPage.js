import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  QUIZ_AREA,
  CONTAINER_START,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement, handleAnswerClick } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initWelcomePage } from './welcomePage.js';

// Retrieve quizData from localStorage, if available
const storedQuizData = JSON.parse(localStorage.getItem('quizData')) || quizData;

// Initialize score from localStorage or set it to 0
let score = parseInt(localStorage.getItem('score')) || 0;

export const initQuestionPage = () => {
  const userInterface = document.getElementById(QUIZ_AREA);
  userInterface.innerHTML = '';

  let currentQuestion = storedQuizData.questions[storedQuizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  answersListElement.innerHTML = '';

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.addEventListener('click', () => {
      handleAnswerClick(key, currentQuestion.correct);
      saveProgress(); // Update progress after answering
    });
    answersListElement.appendChild(answerElement);
  }

  document.getElementById(NEXT_QUESTION_BUTTON_ID).addEventListener('click', nextQuestion);
};

export const nextQuestion = () => {
  storedQuizData.currentQuestionIndex += 1;
  saveProgress(); // Save progress before moving to the next question

  if (storedQuizData.currentQuestionIndex < storedQuizData.questions.length) {
    initQuestionPage();
  } else {
    showQuizResults();
  }
};

const showQuizResults = () => {
  const userInterface = document.getElementById(QUIZ_AREA);
  userInterface.innerHTML = `
    <div class="container">
      <h1>Thank you for playing</h1>
      <h4>Your score: ${score} out of ${storedQuizData.questions.length}</h4>
      <div class="buttons">
        <button id="try-again-button">Try Again</button>
        <button id="go-home-button">Go to Home</button>
      </div>
    </div>
  `;

  document.getElementById('try-again-button').addEventListener('click', () => {
    storedQuizData.currentQuestionIndex = 0;
    score = 0; // Reset the score
    saveProgress(); // Save progress before restarting
    initQuestionPage();
  });

  document.getElementById('go-home-button').addEventListener('click', () => {
    // Reset everything and go to the home page
    storedQuizData.currentQuestionIndex = 0;
    score = 0;
    localStorage.removeItem('currentQuestionIndex'); // Remove stored index
    localStorage.removeItem('quizData'); // Remove stored data
    localStorage.removeItem('score'); // Remove stored score
    userInterface.style.display = 'none';
    const mainPage = document.getElementById(CONTAINER_START);
    mainPage.style.display = 'block';
    initWelcomePage();
    
  });
};

function saveProgress() {
  // Update the score in localStorage
  localStorage.setItem('score', JSON.stringify(score));
  // Update quizData in localStorage
  localStorage.setItem('quizData', JSON.stringify(storedQuizData));
  localStorage.setItem('currentQuestionIndex', JSON.stringify(storedQuizData.currentQuestionIndex));
}
