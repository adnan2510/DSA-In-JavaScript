// Break And Continue

let num = Number(prompt("Enter a number: ")); // Prompt user for a number
// let n = 10;

// for (let i = 1; i <= n; i++) {
//   if (i == 5) {
//     continue; // Skip the number 5
//   }
//   console.log(i); // Print all numbers except 5
// }
// for (let i = 1; i <= n; i++) {
//   if (i == 5) {
//     break; // Stop the loop when i is 5
//   }
//   console.log(i); // Print all numbers until 5
// }

//============================================================================================================================
// NEW TOPIC
//============================================================================================================================

// While Loop

//============================================================================================================================

// let i = 1; // Initialize i to 1
// while (i <= n) {
//   console.log(i); // Print the value of i
//   i++; // Increment i by 1
// }

//============================================================================================================================

// Sum of Digits

let sum = 0; // Initialize sum to 0
// while (num > 0) {
//   let digit = num % 10; // Get the last digit of num
//   sum += digit; // Add the digit to sum
//   num = Math.floor(num / 10); // Remove the last digit from num
// }
// console.log(sum); // Print the sum of digits

//============================================================================================================================

//Q.reverse of number

while (num > 0) {
  let digit = num % 10; // Get the last digit of num
  sum = sum * 10 + digit; // Add the digit to sum
  num = Math.floor(num / 10); // Remove the last digit from num
}
console.log(sum);

//============================================================================================================================

// Q. Storng Number

// in terminal use first "cd "Day 31 Loop-2" " and then "node site.js" to run the code 

// const prompt = require("prompt-sync")();
// let n = prompt("Enter the number ");

// let copyStrong = n; // Store the original number in num
// let ans = 0; // Initialize ans to 0
// while (n > 0) {
//     let digit = n % 10; // Get the last digit of n
//   let fact = 1; // Initialize fact to 1
//   for (let i = 1; i <= digit; i++) {
//     fact *= i; // Calculate the factorial of digit
//   }
//   ans = ans + fact; // Add the factorial to ans
//     n = Math.floor(n / 10); // Remove the last digit from n     
// }

// if(copyStrong == ans) {
//     console.log("Strong Number")
// }
// else {
//     console.log("Not a Strong Number")
// }

// After Nested Loop



//============================================================================================================================

//Q.Automorphic number

let copy = num; // Copy the original number
let sq = num * num; // Calculate the square of the number

let count = 0; // Initialize count to 0
while (num > 0) {
  count++; // Increment count for each digit in num
  num = Math.floor(num / 10); // Remove the last digit from num
}

if (sq % Math.pow(10, count) == copy)
  console.log("Automorphic number"); // Print if the number is automorphic
else console.log("Not automorphic number"); // Print if the number is not automorphic
//============================================================================================================================
// NEW TOPIC
//============================================================================================================================

// Switch Case - Switch case is Faster than if else statement and loops its use Hashing technique to store the values.
switch (num) {
  case 1:
    console.log("Monday"); // Print "Case 1" if case 1 is selected
    break; // Exit the switch statement

  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
  case 8:
  case 9:// // Multiple cases can be handled together
    console.log("Sunday");
    break;

  default:
    console.log("Invalid day"); // Print "Invalid day" if no case is matched
    break;
}
