const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number of rows: "));

// Pattern 1: Right-angled triangle pattern
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

//============================================================================================================================

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//       process.stdout.write(" ");
//     }
//     for (let j = 1; j <= i; j++) {
//       process.stdout.write("* ");
//     }
//     console.log();
//   }

//=============================================================================================================================

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i === j || i + j === n + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

// ==============================================================================================================================

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= (n*2)-1; j++) {
//       if (i === j || i + j === n *2) {
//         process.stdout.write("* ");
//       } else {
//         process.stdout.write("  ");
//       }
//     }
//     console.log();
//   }
  

  //==============================================================================================================================
  //==============================================================================================================================

  //First Data Structure --> Array

  // Data Structure: A data structure is a way of organizing and storing data in a computer so that it can be accessed and modified efficiently.
  //array: An array is a collection of items stored at contiguous memory locations. It is a data structure that can hold multiple values of the same type.
//   Array is a liner data structure that stores elements in a sequential manner. It is a collection of items stored at contiguous memory locations.

let arr = [1, 2, 3, 4, 5,"ziyan",true]; // array declaration and initialization

console.log(arr); // prints the entire array