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
  },
];
