"use strict";
exports.__esModule = true;
var Block = /** @class */ (function () {
    function Block() {
    }
    return Block;
}());
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.operations = new Set(["+", "-", "/", "*"]);
        this.calculatedValue = 0;
    }
    Calculator.prototype.addition = function (firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    };
    Calculator.prototype.subtraction = function (firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    };
    Calculator.prototype.multiplication = function (firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    };
    Calculator.prototype.division = function (firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    };
    Calculator.prototype.cleanUserInput = function (input) {
        return input.replace(/ /g, "");
    };
    Calculator.prototype.priorityLevel = function (input) {
        var operations = new Set(input.split(""));
        if (operations.has("*") || operations.has("/"))
            return 2;
        if (operations.has("+") || operations.has("-"))
            return 1;
        return 0;
    };
    Calculator.prototype.separateBlocks = function (input, level) {
        if (level === 0)
            return [];
        if (level === 1)
            input.split("+");
    };
    Calculator.prototype.splitByOperations = function (input) {
        return input.split(/\+|\*|\-|\//g);
    };
    Calculator.prototype.calculation = function (op, current, newNumber) {
        switch (op) {
            case "+":
                return this.addition(current, newNumber);
            case "-":
                return this.subtraction(current, newNumber);
            case "*":
                return this.multiplication(current, newNumber);
            case "/":
                return this.division(current, newNumber);
            default:
                return current;
        }
    };
    Calculator.prototype.newWay = function (userINput) {
        var blocks = userINput.split("");
        console.log("blocks", blocks);
        var _loop_1 = function () {
            var newBlocks = [];
            var higher = blocks.findIndex(function (item) { return item === "*" || item === "/"; });
            var lower = blocks.findIndex(function (item) { return item === "+" || item === "-"; });
            var findIndex = higher > 0 ? higher : lower;
            console.log(findIndex);
            var blockValue = this_1.calculation(blocks[findIndex], +blocks[findIndex - 1], +blocks[findIndex + 1]);
            blocks.forEach(function (item, index) {
                if (index === findIndex - 1 || index === findIndex + 1)
                    return;
                if (index === findIndex)
                    return newBlocks.push(blockValue);
                newBlocks.push(item);
            });
            console.log(newBlocks);
            blocks = newBlocks;
        };
        var this_1 = this;
        while (blocks.length > 1) {
            _loop_1();
        }
        console.log("blocks", blocks);
        return blocks;
    };
    Calculator.prototype.calculate = function (userInput) {
        var cleanInput = this.cleanUserInput(userInput);
        var newData = this.newWay(cleanInput);
        // const pLevel = this.priorityLevel(userInput);
        // const blocks = this.separateBlocks(userInput, pLevel);
        // const parts = userInput.split(" ");
        // let calculatedValue = 0;
        // let currentOperations = null;
        // parts.forEach((item, index) => {
        //   if (index === 0 && !this.operations.has(item)) {
        //     return (calculatedValue = parseFloat(item));
        //   }
        //   if (this.operations.has(item)) {
        //     return (currentOperations = item);
        //   }
        //   calculatedValue = this.calculation(
        //     currentOperations,
        //     calculatedValue,
        //     parseFloat(item)
        //   );
        // });
        return newData[0];
    };
    return Calculator;
}());
exports["default"] = Calculator;
