// let arr = [10, 20, 30, 40, 50];

// arr.push(60); // Add 60 to the end of the array
// arr.unshift(0); // Add 0 to the beginning of the array
// arr.pop(); // Remove the last element (60)
// arr.shift(); // Remove the first element (0)
// arr.splice(2, 1); // Remove the element at index 2 (30)

// arr[1] = 25; // Change the second element (20) to 25

// console.log(arr);
// console.log(arr.length); // Get the length of the array
// console.log(arr[2]); // Access the first element of the array

//==============================================================================================================

// Print the array using user input

// let prompt = require('prompt-sync')();
// let Size = Number(prompt('Enter a Array size: ')); // Get user input
// let arr = new Array(Size); // Create an array of the specified size

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt('Enter a number: ')); // Fill the array with user input
// }

// console.log(arr); // Print the array

//===============================================================================================================

// Q 23. Sum of array’s element


// let sum = 0; // Initialize sum variable
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt('Enter a number: ')); // Fill the array with user input
//     sum += arr[i]; // Add each element to the sum
// }
// console.log("sum "+ sum); // Print the array

//===============================================================================================================

//Q 24. Max element from array

let arr = [10, 90, 40, 70, 60];

let max = arr[0]; // Initialize max with the first element of the array
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) { // Compare each element with max
        max = arr[i]; // Update max if the current element is larger
    }
}
console.log("Largest number in the array is: " + max); // Print the largest number
//===============================================================================================================
