"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Calculator_1 = __importDefault(require("./Classes/Calculator"));
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var calculator = new Calculator_1["default"]();
rl.question("What do you think of node.js? ", function (answer) {
    var value = calculator.calculate(answer);
    console.log("output: ".concat(value));
    rl.close();
});
