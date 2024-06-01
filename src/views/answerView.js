import { quizData } from '../data.js';
import { nextQuestion } from '../pages/questionPage.js';
import { ANSWERS_LIST_ID } from '../constants.js';
import { QUIZ_AREA } from '../constants.js';

let answerSelected = false; // Flag to prevent multiple selections

export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = `${key}: ${answerText}`;
  element.classList.add('answer-option');
  element.addEventListener('click', () => handleAnswerClick(key, element));

  return element;
};

export const handleAnswerClick = (selectedKey, selectedElement) => {
  if (answerSelected) return; // Exit if an answer has already been selected

  answerSelected = true; // Set the flag to true on the first selection

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct;

  // Clear previous selections
  document.querySelectorAll('.answer-option').forEach(opt => {
    opt.classList.remove('selected');
    opt.style.background = '';
    opt.style.color = '';
  });

  if (selectedKey === correctAnswer) {
    quizData.score += 1;
    selectedElement.style.background = 'green';
    selectedElement.style.color = 'white';
  } else {
    selectedElement.classList.add('incorrect-answer');
    selectedElement.style.background = '#e63946';
    selectedElement.style.color = 'white';
  }

  selectedElement.classList.add('selected');
  setTimeout(() => {
    answerSelected = false; // Reset the flag for the next question
    nextQuestion();
  }, 2000);
};
