export const questions = [
  {
    type: "list",
    name: "shapeChoice",
    message: "Please choose a shape.",
    choices: ["Square", "Circle", "Triangle"],
  },
  {
    type: "input",
    name: "text",
    message: "Please choose 1 - 3 characters.",
  },
  {
    type: "input",
    name: "textColor",
    message: "Please choose a text color (keyword or hexi-decimal).",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Please choose a shape color (keyword or hexi-decimal).",
  }
];