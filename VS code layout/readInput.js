const fs = require("fs");

// Read input from input.txt
const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");

// Pass input to your logic
const output = require("./Problems/PracticeSheet")(input);

// Write output to output.txt
fs.writeFileSync("output.txt", output.join("\n"), "utf8");
