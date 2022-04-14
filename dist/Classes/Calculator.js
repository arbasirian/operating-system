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
    Calculator.prototype.seprateBlocks = function (input, level) {
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
    Calculator.prototype.calculate = function (userInput) {
        var _this = this;
        var cleanInput = this.cleanUserInput(userInput);
        var pLevel = this.priorityLevel(userInput);
        var blocks = this.seprateBlocks(userInput, pLevel);
        var parts = userInput.split(" ");
        var calculatedValue = 0;
        var currentOperations = null;
        parts.forEach(function (item, index) {
            if (index === 0 && !_this.operations.has(item)) {
                return (calculatedValue = parseFloat(item));
            }
            if (_this.operations.has(item)) {
                return (currentOperations = item);
            }
            calculatedValue = _this.calculation(currentOperations, calculatedValue, parseFloat(item));
        });
        return calculatedValue;
    };
    return Calculator;
}());
exports["default"] = Calculator;
