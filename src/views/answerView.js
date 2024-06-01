
import { quizData } from '../data.js';
import { nextQuestion } from '../pages/questionPage.js';
import { ANSWERS_LIST_ID, QUIZ_AREA } from '../constants.js';

let answerSelected = false;

export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = `${key}: ${answerText}`;
  element.classList.add('answer-option');
  element.addEventListener('click', () => handleAnswerClick(key, element));

  return element;
};

export const handleAnswerClick = (selectedKey, selectedElement) => {
  if (answerSelected) return;

  answerSelected = true;

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct;

  // Disable the Next Question button
  const nextButton = document.getElementById('next-question-button');
  if (nextButton) {
    nextButton.disabled = true;
  }

  // Clear previous selections
  document.querySelectorAll('.answer-option').forEach(opt => {
    opt.classList.remove('selected', 'incorrect-answer');
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

    setTimeout(() => {
      document.querySelectorAll('.answer-option').forEach(opt => {
        if (opt.innerHTML.startsWith(correctAnswer)) {
          opt.style.background = 'green';
          opt.style.color = 'white';
        }
      });
    }, 500);
  }

  selectedElement.classList.add('selected');
  setTimeout(() => {
    answerSelected = false;
    if (nextButton) {
      nextButton.disabled = false; // Re-enable the Next Question button
    }
    nextQuestion();
  }, 2000);
};
