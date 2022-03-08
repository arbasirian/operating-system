var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ops = new Set(["+", "-"]);

rl.question("What do you think of node.js? ", function (answer) {
  const parts = answer.split("");
  let values = null;
  let current = null;
  parts
    .map((i) => i.trim())
    .forEach((p) => {
      if (ops.has(p)) {
        current = p;
        return;
      }
      p = parseInt(p, 10);
      if (current == null) {
        values = parseInt(p, 10);
        return;
      }
      if (current == "+") {
        values += p;
      } else {
        values -= p;
      }
    });
  console.log(`output: ${values}`);
  rl.close();
});
