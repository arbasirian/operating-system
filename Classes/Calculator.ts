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

  private separateBlocks(input: string, level: number) {
    if (level === 0) return [];
    if (level === 1) input.split("+");
  }
  private splitByOperations(input: string) {
    return input.split(/\+|\*|\-|\//g);
  }

  private isOperations(input: string) {
    if (input === "+" || input === "-" || input === "*" || input === "/")
      return true;
    return false;
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

  private newWay(userINput: string) {
    var blocks = userINput.split("");

    while (blocks.length > 1) {
      const newBlocks = [];
      const higher = blocks.findIndex((item) => item === "*" || item === "/");
      const lower = blocks.findIndex((item) => item === "+" || item === "-");
      const findIndex = higher > 0 ? higher : lower;

      const blockValue = this.calculation(
        blocks[findIndex],
        +blocks[findIndex - 1],
        +blocks[findIndex + 1]
      );
      blocks.forEach((item, index) => {
        if (index === findIndex - 1 || index === findIndex + 1) return;
        if (index === findIndex) return newBlocks.push(blockValue);
        newBlocks.push(item);
      });

      blocks = newBlocks;
    }

    return blocks;
  }

  private newWay2(input: string) {
    const newBlocks = new Map<string, { type: string; value: string }>();
    const list = input.split("");
    list.forEach((item, index) => {
      const [latestBlocks] = [...newBlocks.values()].reverse();
      const [latestBlocksKey] = [...newBlocks.keys()].reverse();

      console.log("first", latestBlocks, latestBlocksKey, item, index);
      if (this.isOperations(item)) {
        newBlocks.set("op_" + index, { type: "op", value: item });
        return;
      }
      if (latestBlocks?.type === "op") {
        return newBlocks.set("numBlock_" + index, {
          type: "numBlock",
          value: item,
        });
      }
      if (latestBlocks?.type === "numBlock") {
        return newBlocks.set(latestBlocksKey, {
          type: "numBlock",
          value: latestBlocks.value + item,
        });
      }
      return newBlocks.set("numBlock_" + index, {
        type: "numBlock",
        value: item,
      });
    });

    return newBlocks;
  }

  public calculate(userInput: string) {
    const cleanInput = this.cleanUserInput(userInput);
    const newData = this.newWay(cleanInput);
    console.log("here", this.newWay2(cleanInput));

    return newData[0];
  }
}

export default Calculator;
