export const questions = [
  {
    description:
      " In the array we have the prices of tickets. Which array method would return number 140?",
    variables: ["const ticketsPrice = [20, 30, 40, 50];", "let total = 0;"],
    answersAll: [
      {
        id: 1,
        answer: "ticketsPrice.find((ticket) => ticket * 3.5 === 140);",
        isCorrect: false,
      },
      {
        id: 2,
        answer: "ticketsPrice.splice(0, -1);",
        isCorrect: false,
      },
      {
        id: 3,
        answer:
          "ticketsPrice.forEach((ticket) => {return (total =+ ticket);});",
        isCorrect: false,
      },
      {
        id: 4,
        answer: "ticketsPrice.reduce((acc, cur) => acc + cur);",
        isCorrect: true,
      },
    ],
    explanation:
      "Reduce method accumulates current item in the array to one, final sum. That being said in this example current value is 20, then accumulator goes to the next one which is 30 and adds it automatically to the previous value of 20. Now the new value is 50, and so on... ",
  },
  {
    description: " Which answer will result in number 33",
    variables: ["", ""],
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
    description: "Which console log will return string?",
    variables: [
      'const data = {name: "Walter",surname: "White",profession: "Teacher", whoAmI: function () { this.name + " " + this.surname;},};',
      "",
    ],
    answersAll: [
      {
        id: 1,
        answer: "console.log(data[0].profession);",
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'console.log(data["name"]);',
        isCorrect: true,
      },
      {
        id: 3,
        answer: "console.log(data[surname]);",
        isCorrect: false,
      },
      {
        id: 4,
        answer: "const answer4 = '30' + 3;",
        isCorrect: false,
      },
    ],
    explanation:
      "First console log returns error. There is no 0 index in the single object. Third one executes variable that does not exist and final one executes function that does not return anything (return statement missing)",
  },
];
