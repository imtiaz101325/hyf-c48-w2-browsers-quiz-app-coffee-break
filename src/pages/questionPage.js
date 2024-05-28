import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);
// added start
  function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add('hidden');
  questionContainer.classList.remove('hidden');
  scoreElement.innerText = score;
  resetState();
  showQuestion(quizData.questions[currentQuestionIndex]);

}
function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
function showQuestion(question) {
  questionElement.innerText = question.text;
  Object.keys(question.answers).forEach((key) => {
    const button = document.createElement('button');
    button.innerText = question.answers[key];
    button.classList.add('btn');
    button.dataset.answer = key;
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
function selectAnswer(e) {
  const selectedButton = e.target;
  const selectedAnswer = selectedButton.dataset.answer;
  const correctAnswer = quizData.questions[currentQuestionIndex].correct;

  if (selectedAnswer === correctAnswer) {
    score++;
    scoreElement.innerText = score;
  }

  if (currentQuestionIndex < quizData.questions.length - 1) {
    currentQuestionIndex++;
    setNextQuestion();
  } else {
    showResult();
  }
}
function showResult() {
  questionContainer.classList.add('hidden');
  resultContainer.classList.remove('hidden');
  resultElement.innerText = `Your score is ${score}`;
}
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
startQuiz();  
  initQuestionPage();
};
