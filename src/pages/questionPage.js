import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  QUIZ_AREA,
  GO_TO_HOME,
  CONTAINER_START,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(QUIZ_AREA);

  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
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

  document.getElementById('go-home-button').addEventListener('click', () => {
    userInterface.style.display = 'none';
    mainpage.style.display = 'block';
  });
};

document
  .getElementById('start-quiz-button')
  .addEventListener('click', initQuestionPage);
document.getElementById('start').addEventListener('click', initQuestionPage);
