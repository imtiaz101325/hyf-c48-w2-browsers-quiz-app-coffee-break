import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { QUESTION_CONTAINER } from './constants.js';
import { QUESTION } from './constants.js';
import { ANSWER_BUTTONS_ELEMENT } from './constants.js';
import { SCORE_ELEMENT } from './constants.js';
import { CONTINUE_BUTTON } from './constants.js';
import { RESULT_CONTAINER } from './constants.js';
import { RESULT } from './constants.js';
import { RESTART_BUTTON } from './constants.js';  
const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
};

// let currentQuestionIndex = quizData.currentQuestionIndex;

// const questionContainer = document.getElementById('question-container');
// const questionElement = document.getElementById('question');
// const answerButtonsElement = document.getElementById('answer-buttons');
// const scoreElement = document.getElementById('score').querySelector('span');
// const continueButton = document.getElementById('continue-button');
// const resultContainer = document.getElementById('result-container');
// const resultElement = document.getElementById('result');
// const restartButton = document.getElementById('restart-button');

// let score = 0;

// document.addEventListener('DOMContentLoaded', () => {
//   startQuiz();
// });

// function startQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   resultContainer.classList.add('hidden');
//   questionContainer.classList.remove('hidden');
//   scoreElement.innerText = score;
//   setNextQuestion();
// }

// function setNextQuestion() {
//   resetState();
//   showQuestion(quizData.questions[currentQuestionIndex]);
// }

// function showQuestion(question) {
//   questionElement.innerText = question.text;
//   Object.keys(question.answers).forEach((key) => {
//     const button = document.createElement('button');
//     button.innerText = question.answers[key];
//     button.classList.add('btn');
//     button.dataset.answer = key;
//     button.addEventListener('click', selectAnswer);
//     answerButtonsElement.appendChild(button);
//   });
// }

// function resetState() {
//   while (answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild(answerButtonsElement.firstChild);
//   }
// }

// function selectAnswer(e) {
//   const selectedButton = e.target;
//   const selectedAnswer = selectedButton.dataset.answer;
//   const correctAnswer = quizData.questions[currentQuestionIndex].correct;

//   if (selectedAnswer === correctAnswer) {
//     score++;
//     scoreElement.innerText = score;
//   }

//   if (currentQuestionIndex < quizData.questions.length - 1) {
//     currentQuestionIndex++;
//     setNextQuestion();
//   } else {
//     showResult();
//   }
// }

// function showResult() {
//   questionContainer.classList.add('hidden');
//   resultContainer.classList.remove('hidden');
//   resultElement.innerText = `Your score is ${score}`;
// }

// continueButton.addEventListener('click', () => {
//   if (currentQuestionIndex < quizData.questions.length - 1) {
//     currentQuestionIndex++;
//     setNextQuestion();
//   } else {
//     showResult();
//   }
// });

// restartButton.addEventListener('click', startQuiz);

