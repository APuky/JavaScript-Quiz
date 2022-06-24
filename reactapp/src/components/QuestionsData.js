export const questions = [
  {
    description:
      ' In the array we have prices of tickets. Which array method would return number 140?',
    variables: [
      { id: 1, variable: 'const ticketsPrice = [20, 30, 40, 50];' },
      { id: 2, variable: 'let total = 0;' },
    ],
    answersAll: [
      {
        id: 1,
        answer: 'ticketsPrice.find((ticket) => ticket * 3.5 === 140);',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'ticketsPrice.splice(0, -1);',
        isCorrect: false,
      },
      {
        id: 3,
        answer:
          'ticketsPrice.forEach((ticket) => {return (total =+ ticket);});',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'ticketsPrice.reduce((acc, cur) => acc + cur);',
        isCorrect: true,
      },
    ],
    explanation:
      'Reduce method accumulates current item in the array to one, final sum. That being said in this example current value is 20, then accumulator goes to the next one which is 30 and adds it automatically to the previous value of 20. Now the new value is 50, and so on... ',
  },
  {
    description: 'Which answer will result in number 33',
    variables: [
      { id: 1, variable: '' },
      { id: 2, variable: '' },
    ],
    answersAll: [
      {
        id: 1,
        answer: "const answer1 = '3' + '3';",
        isCorrect: false,
      },
      {
        id: 2,
        answer: "const answer2 = +'3' + 3;",
        isCorrect: false,
      },
      {
        id: 3,
        answer: "const answer3 = +('3' + '3');",
        isCorrect: true,
      },
      {
        id: 4,
        answer: "const answer4 = '30' + 3;",
        isCorrect: false,
      },
    ],
    explanation:
      '("3" + "3") equals to "33". + sign converts the string to a number wich results in a number of 33.',
  },
  {
    description: 'Which console log would return string?',
    variables: [
      {
        id: 1,
        variable:
          'const data = {name: "Walter",surname: "White",profession: "Teacher", whoAmI: function() { this.name + " " + this.surname;},};',
      },
      { id: 2, variable: '' },
    ],
    answersAll: [
      {
        id: 1,
        answer: 'data[0].profession;',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'data["name"];',
        isCorrect: true,
      },
      {
        id: 3,
        answer: 'data[surname];',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'data.whoAmI();',
        isCorrect: false,
      },
    ],
    explanation:
      'First console log returns error. There is no 0 index in the single object. Third one executes variable that does not exist and final one executes function that does not return anything (return statement missing)',
  },
  {
    description: 'What would be the output of .padEnd method?',
    variables: [
      {
        id: 1,
        variable: 'const theStringMethod = "We need to fill the minimum ";',
      },
      {
        id: 2,
        variable:
          'theStringMethod.padEnd(30, "1, 2, 3, 4, 5, 6 or more times")',
      },
    ],
    answersAll: [
      {
        id: 1,
        answer: 'We need to fill the minimum 1,',
        isCorrect: true,
      },
      {
        id: 2,
        answer: 'We need to fill the 1, 2, 3, 4, 5, 6 or more times minimum',
        isCorrect: false,
      },
      {
        id: 3,
        answer: 'undefined',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'We need to fill the minimum 1, 2, 3, 4, 5, 6 or more times',
        isCorrect: false,
      },
    ],
    explanation:
      '.padEnd is a string method that will add additional characters to your string depending on the conditions you insert. In this case the string is limited to minimum of 30 characters and that space is filled with additional string. Since string ends at 30 characters, the additional string could not be displayed until the end',
  },
  {
    description:
      'Which of the following regular expressions does not replace comma with space correctly?',
    variables: [
      {
        id: 1,
        variable:
          'const removeComma = "I want to, remove, any comma in this, sentence with space";',
      },
      { id: 2, variable: '' },
    ],
    answersAll: [
      {
        id: 1,
        // eslint-disable-next-line no-useless-escape
        answer: "removeComma.replace(/[,s]+|[,s]+/g, ' ');",
        isCorrect: false,
      },
      {
        id: 2,
        answer: "removeComma.replace(/[, ]+/g, ' ').trim();",
        isCorrect: false,
      },
      {
        id: 3,
        // eslint-disable-next-line no-useless-escape
        answer: "removeComma.replace(/[,s]/g, '');",
        isCorrect: false,
      },
      {
        id: 4,
        // eslint-disable-next-line no-useless-escape
        answer: "removeComma.replace(/[,s]/g, ''));",
        isCorrect: true,
      },
    ],
    explanation:
      "Regex in the correct answer replaces comma, however it does not include space. Don't worry much about this one. Great people use regex to simplify web for us and sometimes their regex solution is all we need",
  },
  {
    description: ' What is the name of the following function?',
    variables: [
      {
        id: 1,
        variable: '(() => {console.log("Hello");})();',
      },
      { id: 2, variable: '' },
    ],
    answersAll: [
      {
        id: 1,
        // eslint-disable-next-line no-useless-escape
        answer: 'Immediately Invoked Function Expression',
        isCorrect: true,
      },
      {
        id: 2,
        answer: 'Arrow Function Declaration',
        isCorrect: false,
      },
      {
        id: 3,
        // eslint-disable-next-line no-useless-escape
        answer: 'Function Destruction',
        isCorrect: false,
      },
      {
        id: 4,
        // eslint-disable-next-line no-useless-escape
        answer: 'Callback Function',
        isCorrect: false,
      },
    ],
    explanation:
      'IIFE refers to a function that is executed as soon as it is created by calling it at the end of declaring it.',
  },
  {
    description:
      'What is the correct way to fetch local JSON data from the following options? (script.js and data.json are in same directory without modules)',
    variables: [
      {
        id: 1,
        variable: '',
      },
      { id: 2, variable: '' },
    ],
    answersAll: [
      {
        id: 1,
        // eslint-disable-next-line no-useless-escape
        answer: "const data = require('./data.json'); \n fetch(data);",
        isCorrect: false,
      },
      {
        id: 2,
        answer: "import {data} from './data'; fetch(data);",
        isCorrect: false,
      },
      {
        id: 3,
        // eslint-disable-next-line no-useless-escape
        answer: "fetch('./data.json')",
        isCorrect: true,
      },
      {
        id: 4,
        // eslint-disable-next-line no-useless-escape
        answer: 'const primaryData = fetch(./data.json)',
        isCorrect: false,
      },
    ],
    explanation:
      'The "require" is NodeJS function to include modules which does not work in client side JS. Importing is not possible outside of module either. Last answer is missing quotes/invalid import',
  },
  {
    description: 'Which inline function call is incorrect?',
    variables: [
      {
        id: 1,
        variable: '',
      },
      { id: 2, variable: '' },
    ],
    answersAll: [
      {
        id: 1,
        // eslint-disable-next-line no-useless-escape
        answer: `'onclick="function inlineFunc(){alert('Hello')}; inlineFunc()"'`,
        isCorrect: false,
      },
      {
        id: 2,
        answer: `'onclick="(() => alert('Hello'))()"'`,
        isCorrect: false,
      },
      {
        id: 3,
        // eslint-disable-next-line no-useless-escape
        answer: `'onclick="(function() {alert('Hello')})()"'`,
        isCorrect: false,
      },
      {
        id: 4,
        // eslint-disable-next-line no-useless-escape
        answer: `'onclick="() => alert('Hello')"'`,
        isCorrect: true,
      },
    ],
    explanation:
      'Every answer contains a function that is called at the end. The 4th one does not get called which results in no click event at the end.',
  },
  {
    description: 'Which of the following is not true?',
    variables: [
      {
        id: 1,
        variable: 'const array = [1, 2, 3, 4, 5];',
      },
      { id: 2, variable: '' },
    ],
    answersAll: [
      {
        id: 1,
        // eslint-disable-next-line no-useless-escape
        answer:
          'The splice() method mutates original array and slice() does not',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'const newArray = array.splice() will result in an empty array',
        isCorrect: false,
      },
      {
        id: 3,
        // eslint-disable-next-line no-useless-escape
        answer: 'const newArray = array.splice(2, -1) will return [3, 4]',
        isCorrect: true,
      },
      {
        id: 4,
        // eslint-disable-next-line no-useless-escape
        answer: 'const newArray = array.slice(1, 2) will return [2]',
        isCorrect: false,
      },
    ],
    explanation:
      'The splice() method takes delete count as second parameter and in this case second parameter, in correct answer, is -1 which makes the newArray empty',
  },
  {
    description:
      'Which of the following methods adds new element to the beginning of an array?',
    variables: [
      {
        id: 1,
        variable: '',
      },
      { id: 2, variable: '' },
    ],
    answersAll: [
      {
        id: 1,
        // eslint-disable-next-line no-useless-escape
        answer: 'shift()',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'unshift()',
        isCorrect: true,
      },
      {
        id: 3,
        // eslint-disable-next-line no-useless-escape
        answer: 'join()',
        isCorrect: false,
      },
      {
        id: 4,
        // eslint-disable-next-line no-useless-escape
        answer: 'push()',
        isCorrect: false,
      },
    ],
    explanation:
      'The shift() method removes first element from an array. The join() converts an array to a string and lets you modify it. The push() method pushes new element to the end of an array',
  },
];
