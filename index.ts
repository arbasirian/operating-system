import Calculator from "./Classes/Calculator";

var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculator = new Calculator();

rl.question("What do you think of node.js? ", function (answer) {
  const value = calculator.calculate(answer);
  console.log(`output: ${value}`);
  rl.close();
});
