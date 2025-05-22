//Pattern printing using nested loops

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

//============================================================================================================================

//Get user input in Node.js

// const prompt = require('prompt-sync')();
// let num = prompt('Enter a number: ');
// console.log(num);

//============================================================================================================================

//Pattern printing using User input

const prompt = require("prompt-sync")();
let n = prompt("Enter the number of rows: ");

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }
//============================================================================================================================

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//============================================================================================================================

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }

//============================================================================================================================

//Using ascII value to print pattern

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(64 + j) + " ");
//   }
//   console.log();
// }

//============================================================================================================================

// Q 38. Inverted Right Angle Triangle Pattern

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

//