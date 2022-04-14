class Block {
  private value?: number;
  private inner?: Block;
}

class Calculator {
  private operations: Set<string> = new Set(["+", "-", "/", "*"]);
  private calculatedValue: number = 0;

  constructor() {}

  private addition(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber;
  }
  private subtraction(firstNumber: number, secondNumber: number) {
    return firstNumber - secondNumber;
  }
  private multiplication(firstNumber: number, secondNumber: number) {
    return firstNumber * secondNumber;
  }
  private division(firstNumber: number, secondNumber: number) {
    return firstNumber / secondNumber;
  }

  private cleanUserInput(input: string) {
    return input.replace(/ /g, "");
  }

  private priorityLevel(input: string) {
    const operations = new Set(input.split(""));
    if (operations.has("*") || operations.has("/")) return 2;
    if (operations.has("+") || operations.has("-")) return 1;
    return 0;
  }

  private seprateBlocks(input: string, level: number) {
    if (level === 0) return [];
    if (level === 1) input.split("+");
  }
  private splitByOperations(input: string) {
    return input.split(/\+|\*|\-|\//g);
  }

  private calculation(op: string, current: number, newNumber: number) {
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
  }

  public calculate(userInput: string) {
    const cleanInput = this.cleanUserInput(userInput);
    const pLevel = this.priorityLevel(userInput);
    const blocks = this.seprateBlocks(userInput, pLevel);

    const parts = userInput.split(" ");
    let calculatedValue = 0;
    let currentOperations = null;

    parts.forEach((item, index) => {
      if (index === 0 && !this.operations.has(item)) {
        return (calculatedValue = parseFloat(item));
      }
      if (this.operations.has(item)) {
        return (currentOperations = item);
      }
      calculatedValue = this.calculation(
        currentOperations,
        calculatedValue,
        parseFloat(item)
      );
    });

    return calculatedValue;
  }
}

export default Calculator;
