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
      links: [
        {
          text: 'Wikipedia',
          href: 'https://en.wikipedia.org/wiki/Coffee_bean',
        },
        {
          text: 'National Coffee Association',
          href: 'https://www.ncausa.org/About-Coffee/What-is-Coffee',
        },
      ],
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
      links: [
        {
          text: 'Statista',
          href: 'https://www.statista.com/statistics/277137/us-most-popular-coffee-preparations/',
          href: 'https://www.statista.com/statistics/277137/us-most-popular-coffee-preparations/',
        },
        {
          text: 'Coffee Affection',
          href: 'https://coffeeaffection.com/most-popular-coffee-drinks/',
        },
      ],
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
      links: [
        {
          text: 'World Atlas',
          href: 'https://www.worldatlas.com/articles/top-coffee-producing-countries.html',
        },
        {
          text: 'Coffee Rank',
          href: 'https://www.coffeerank.com/coffee-producers/',
        },
      ],
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
      links: [
        {
          text: 'Wikipedia',
          href: 'https://en.wikipedia.org/wiki/Coffee_break',
        },
        {
          text: 'HRZone',
          href: 'https://www.hrzone.com/hr-glossary/what-is-a-coffee-break',
        },
      ],
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
      links: [
        {
          text: 'Wikipedia',
          href: 'https://en.wikipedia.org/wiki/Coffee_break',
        },
        {
          text: 'HRZone',
          href: 'https://www.hrzone.com/hr-glossary/what-is-a-coffee-break',
        },
      ],
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
      links: [
        {
          text: 'Coffee Affection',
          href: 'https://coffeeaffection.com/what-is-a-cappuccino/',
        },
        {
          text: 'National Coffee Association',
          href: 'https://www.ncausa.org/About-Coffee/What-is-Coffee/Coffee-Roasts-and-Flavors',
        },
      ],
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
      links: [
        {
          text: 'International Coffee Organization',
          href: 'https://www.internationalcoffeeday.org/',
        },
        {
          text: 'National Today',
          href: 'https://nationaltoday.com/international-coffee-day/',
        },
      ],
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
      links: [
        {
          text: 'Perfect Daily Grind',
          href: 'https://perfectdailygrind.com/2019/09/whats-the-difference-between-pour-over-and-drip-coffee/',
        },
        {},
        {
          text: 'National Coffee Association',
          href: 'https://www.ncausa.org/About-Coffee/What-is-Coffee/Coffee-Roasts-and-Flavors',
        },
      ],
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
      links: [
        {
          text: 'International Coffee Organization',
          href: 'https://www.internationalcoffeeday.org/',
        },
        {
          text: 'National Today',
          href: 'https://nationaltoday.com/international-coffee-day/',
        },
      ],
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
      links: [
        {
          text: 'Perfect Daily Grind',
          href: 'https://perfectdailygrind.com/2019/09/whats-the-difference-between-pour-over-and-drip-coffee/',
        },
        {
          text: 'Blue Bottle Coffee',
          href: 'https://bluebottlecoffee.com/preparation-guides/pour-over',
        },
      ],
    },
  ],
};
