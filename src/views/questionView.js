import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';
import { handleAnswerClick } from './answerView.js';
import { createAnswerElement } from './answerView.js';

/**
 * Create a full question element
 * @returns {Element}
 */
const currentScore = quizData.score;
export const createQuestionElement = (question, currentScore) => {
  const element = document.createElement('div');

  element.innerHTML = String.raw`
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
    <h3>Score:${quizData.score} / ${quizData.questions.length}</h3>
  `;

  return element;
};

