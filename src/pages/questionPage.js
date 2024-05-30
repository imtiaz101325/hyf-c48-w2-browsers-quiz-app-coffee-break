import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  QUIZ_AREA,
  GO_TO_HOME,
  CONTAINER_START,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement, handleAnswerClick } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initWelcomePage } from './welcomePage.js';

let score = 0;

export const initQuestionPage = () => {
  const userInterface = document.getElementById(QUIZ_AREA);
  
  userInterface.innerHTML = '';
  
  let currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);
  

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.addEventListener('click', () =>
      handleAnswerClick(key, currentQuestion.correct)
    );
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};


export const nextQuestion = () => {
  quizData.currentQuestionIndex += 1;
  
  if (quizData.currentQuestionIndex < quizData.questions.length) {
    initQuestionPage();
  } else {
    showQuizResults();
  }
};
const mainpage = document.getElementById(CONTAINER_START);
const showQuizResults = () => {
  const userInterface = document.getElementById(QUIZ_AREA);
  userInterface.innerHTML = `
    <div class="container">
      <h1>thank you for playing</h1>
      <h4>Your score: ${quizData.score} out of ${quizData.questions.length}</h4>
      <div class="buttons">
        <button id="go-home-button">Go to Home</button>
      </div>
    </div>
  `;
  document.getElementById('go-home-button').addEventListener('click', () => {
    userInterface.style.display = 'none';
    mainpage.style.display = 'block';

    initWelcomePage();
    quizData.currentQuestionIndex = 0;
    currentQuestion=quizData.questions[quizData.currentQuestionIndex];
    quizData.score = 0;
  });
};