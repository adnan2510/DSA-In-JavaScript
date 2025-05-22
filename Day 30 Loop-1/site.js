let n = Number(prompt("Enter a number")); // Get user input for n n= 10

// Loop from 1 to n and print each number means 1 to 10
for (let i = 1; i <= n; i++) {
  console.log(i);
}

// Loop from n to 1 and print each number means 10 to 1
for (let i = n; i >= 1; i--) {
  console.log(i);
}

// Loop from 1 to 10 and print the multiplication table of n means 5*1=5, 5*2=10,..., 5*10=50
for (let i = 1; i <= 10; i++) {
  console.log(n + " * " + i + " = " + n * i);
}

// Loop from 1 to n and print the sum of all numbers means 1+2+3+4+5+6+7+8+9+10=55
let sum = 0; // Initialize sum to 0
for (let i = 1; i <= n; i++) {
  sum = sum + i; // Add each number from 1 to n to sum
}
console.log(sum); // Print the sum of numbers from 1 to n

// Loop from 1 to n and print the factorial of n means 1*2*3*4*5*6*7*8*9*10=3628800
let fact = 0; // Initialize sum to 0
for (let i = 1; i <= n; i++) {
  fact = fact * i; // Multiply each number from 1 to n to fact
}
console.log(fact); //   Print the factorial of numbers from 1 to n



// Print the sum of all even & odd numbers in a range seperately.
let evenSum = 0; // Initialize evenSum to 0
let oddSum = 0; // Initialize oddSum to 0

for (let i = 1; i <= n; i++)  {
  if (i % 2 == 0) {
    evenSum = evenSum + i; // Add even numbers to evenSum
  } else {
    oddSum = oddSum + i; // Add odd numbers to oddSum
  }
}
console.log("Even Sum: " + evenSum); // Print the sum of even numbers
console.log("Odd Sum: " + oddSum); // Print the sum of odd numbers

//Q. Print all the factors of a number.

for (let i = 1; i <= n/2; i++)  
  {
  if (n % i == 0) {
    console.log(i); // Print the factors of n
  }
}
console.log(n); // Print the number itself as a factor

// Q. Check if the number is Prime or not.

// TechNique 1: Check if the number is prime or not using a loop.

// let isPrime = true; // Initialize isPrime to true
// for (let i = 2; i <=n/2; i++) {
//   if (n % i == 0) {
//     isPrime = false; // If n is divisible by any number, it's not prime
//     break;
//   }
// }
// if (isPrime) console.log("prime number"); // Print if n is prime
// else console.log("not prime number"); // Print if n is not prime

// TechNique 2

let isPrime = isPrimeFun(); // Initialize isPrime to true

if (isPrime) console.log("prime number"); // Print if n is prime
else console.log("not prime number"); // Print if n is not prime

function isPrimeFun() {
  if (n <= 1) return false; 
  if(n==2) return true;
  if (n % 2 == 0) return false; 

  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) return false; // If n is divisible by any number, it's not prime
  }
}


// Write a program to take two inputs a, b & find the value of a  raised to the power of b.  
//     Ex - a = 2, b = 5       OP - 2^5 = 32

let a = Number(prompt("Enter the base number (a):")); // Get input for a
let b = Number(prompt("Enter the exponent (b):"));    // Get input for b

let result = 1; // Initialize result as 1

for (let i = 1; i <= b; i++) {
    result = result * a; // Multiply 'a' to result in every iteration
}

console.log(a + "^" + b + " = " + result); // Print output