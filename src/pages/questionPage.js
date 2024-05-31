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

let score = 0;

export const initQuestionPage = () => {
  const userInterface = document.getElementById(QUIZ_AREA);

  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
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
  // quizData.currentQuestionIndex +=1;
  quizData.currentQuestionIndex +=1;
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
      <h1>Quiz Results</h1>
      <h4>Your score: ${quizData.score} out of ${quizData.questions.length}</h4>
      <div class="buttons">
        <button id="try-again-button">Try Again</button>
        <button id="go-home-button">Go to Home</button>
      </div>
    </div>
  `;

  document.getElementById('try-again-button').addEventListener('click', () => {
    quizData.currentQuestionIndex = 0;
    quizData.score = 0;
    initQuestionPage();
  });
  const body=document.querySelector('body')

  document.getElementById('go-home-button').addEventListener('click', () => {
    body.style.background=" url('/coffee.jpg') no-repeat center center fixed "
    body.style.backgroundSize ='cover'
    userInterface.style.display = 'none';
    mainpage.style.display = 'block';

  });
};

document
  .getElementById('start-quiz-button')
  .addEventListener('click', initQuestionPage);
document.getElementById('start').addEventListener('click', initQuestionPage);
