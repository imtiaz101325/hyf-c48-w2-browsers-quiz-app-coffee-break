/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  score: 0,
  questions: [
    {
      text: 'What is the main ingredient in coffee?',
      answers: {
        a: 'Tea leaves',
        b: 'Coffee beans',
        c: 'Cocoa beans',
        d: 'Chicory root',
      },
      correct: 'b',
      selected: null,

    },
    {
      text: 'What is the most popular coffee drink in the United States?',
      answers: {
        a: 'Espresso',
        b: 'Latte',
        c: 'Cappuccino',
        d: 'Drip coffee',
      },
      correct: 'd',
      selected: null,

    },
    {
      text: 'Which country is the largest producer of coffee in the world?',
      answers: {
        a: 'Colombia',
        b: 'Vietnam',
        c: 'Ethiopia',
        d: 'Brazil',
      },
      correct: 'd',
      selected: null,

    },
    {
      text: 'What is a coffee break?',
      answers: {
        a: 'A short rest period during the workday',
        b: 'A time to brew coffee',
        c: 'A moment to read about coffee',
        d: 'A vacation dedicated to coffee tasting',
      },
      correct: 'a',
      selected: null,

    },
    {
      text: 'What is a siesta?',
      answers: {
        a: 'A quick snack during the afternoon',
        b: 'A short walk after lunch',
        c: 'An afternoon rest or nap, especially in hot countries',
        d: 'A traditional dance from Spain',
      },
      correct: 'c',
      selected: null,
    },
    {
      text: 'What is a cappuccino?',
      answers: {
        a: 'Espresso with steamed milk',
        b: 'Espresso with steamed milk and foam',
        c: 'Espresso with chocolate',
        d: 'Black coffee with sugar',
      },
      correct: 'b',
      selected: null,

    },
    {
      text: 'When is International Coffee Day celebrated?',
      answers: {
        a: 'September 29',
        b: 'October 1',
        c: 'August 15',
        d: 'December 5',
      },
      correct: 'b',
      selected: null,

    },
    {
      text: 'Which coffee brewing method involves pouring hot water over ground coffee in a filter?',
      answers: {
        a: 'French press',
        b: 'Espresso machine',
        c: 'Pour-over',
        d: 'AeroPress',
      },
      correct: 'c',
      selected: null,


    },
    {
      text: 'What is brainstorming?',
      answers: {
        a: 'A weather phenomenon involving heavy rain and lightning',
        b: 'A process of generating creative ideas and solutions',
        c: 'A type of mental exercise for memory improvement',
        d: 'A technique for stress relief through meditation',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'What is remote work?',
      answers: {
        a: 'Working from a location other than the main office',
        b: 'Working only during the weekends',
        c: 'A job that requires extensive travel',
        d: 'A position that involves managing other workers',
      },
      correct: 'a',
      selected: null,
    },
  ],
};
