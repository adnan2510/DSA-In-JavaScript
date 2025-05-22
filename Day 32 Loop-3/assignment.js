// 1. ISBN Number
let isbn = prompt("Q1: Enter 9-digit ISBN number:");
let sum1 = 0;
for (let i = 0; i < 9; i++) {
    sum1 += (i + 1) * Number(isbn[i]);
}
console.log(sum1 % 11 === 0 ? "Valid ISBN" : "Invalid ISBN");

// 2. HCF/GCD
let a = Number(prompt("Q2: Enter first number for GCD:"));
let b = Number(prompt("Enter second number for GCD:"));
let x = a, y = b;
while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
}
console.log("GCD is", x);

// 3. Harshad Number
let harshadNum = Number(prompt("Q3: Enter number to check Harshad:"));
let tempH = harshadNum, sumH = 0;
while (tempH > 0) {
    sumH += tempH % 10;
    tempH = Math.floor(tempH / 10);
}
console.log(harshadNum % sumH === 0 ? "Harshad Number" : "Not a Harshad Number");

// 4. Perfect Square
let sqNum = Number(prompt("Q4: Enter number to check perfect square:"));
console.log(Number.isInteger(Math.sqrt(sqNum)) ? "Perfect Square" : "Not a Perfect Square");

// 5. Abundant Number
let abNum = Number(prompt("Q5: Enter number to check abundant:"));
let sumAb = 0;
for (let i = 1; i <= abNum / 2; i++) {
    if (abNum % i === 0) sumAb += i;
}
console.log(sumAb > abNum ? "Abundant Number" : "Not an Abundant Number");

// 6. Fibonacci Series
let N = Number(prompt("Q6: Enter number of Fibonacci terms:"));
let f1 = 0, f2 = 1, fibSeries = [f1, f2];
for (let i = 2; i < N; i++) {
    let next = f1 + f2;
    fibSeries.push(next);
    f1 = f2;
    f2 = next;
}
console.log("Fibonacci Series:", fibSeries.slice(0, N).join(", "));

// 7. Numbers with Exactly X Divisors
let divCount = Number(prompt("Q7: Enter X to find numbers with exactly X divisors (1-100):"));
let result = [];
for (let i = 1; i <= 100; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) count++;
    }
    if (count === divCount) result.push(i);
}
console.log("Numbers with exactly", divCount, "divisors:", result.join(", "));

// 8. Prime Factors
let pfNum = Number(prompt("Q8: Enter number to find prime factors:"));
let i = 2;
let factors = [];
while (pfNum > 1) {
    if (pfNum % i === 0) {
        factors.push(i);
        pfNum /= i;
    } else {
        i++;
    }
}
console.log("Prime Factors:", factors.join(", "));

// 9. Area Calculator
let shape = prompt("Q9: Enter shape (circle, rectangle, triangle):").toLowerCase();
switch (shape) {
    case "circle":
        let r = Number(prompt("Enter radius:"));
        console.log("Area =", Math.PI * r * r);
        break;
    case "rectangle":
        let l = Number(prompt("Enter length:"));
        let w = Number(prompt("Enter width:"));
        console.log("Area =", l * w);
        break;
    case "triangle":
        let base = Number(prompt("Enter base:"));
        let height = Number(prompt("Enter height:"));
        console.log("Area =", 0.5 * base * height);
        break;
    default:
        console.log("Invalid shape");
}

// 10. Neon Number
let neon = Number(prompt("Q10: Enter number to check Neon:"));
let square = neon * neon, sumNeon = 0;
while (square > 0) {
    sumNeon += square % 10;
    square = Math.floor(square / 10);
}
console.log(sumNeon === neon ? "Neon Number" : "Not a Neon Number");

// 11. Sum of Even Indexed Fibonacci Numbers
let n11 = Number(prompt("Q11: Enter N to sum even-indexed Fibonacci numbers up to 2N:"));
let fa = 0, fb = 1, sumEven = 0;
for (let i = 0; i < 2 * n11; i++) {
    if (i % 2 === 0) sumEven += fa;
    let next = fa + fb;
    fa = fb;
    fb = next;
}
console.log("Sum of even-indexed Fibonacci numbers:", sumEven);

// 12. Largest Digit in Number
let n12 = Number(prompt("Q12: Enter number to find largest digit:"));
let maxDigit = 0, temp12 = n12;
while (temp12 > 0) {
    let d = temp12 % 10;
    if (d > maxDigit) maxDigit = d;
    temp12 = Math.floor(temp12 / 10);
}
console.log("Largest digit is", maxDigit);

// 13. LCM of Two Numbers
let lcmA = Number(prompt("Q13: Enter first number for LCM:"));
let lcmB = Number(prompt("Enter second number for LCM:"));
let aa = lcmA, bb = lcmB;
while (bb !== 0) {
    let t = bb;
    bb = aa % bb;
    aa = t;
}
let lcm = (lcmA * lcmB) / aa;
console.log("LCM is", lcm);

// 14. Sum of Even Digits
let n14 = Number(prompt("Q14: Enter number to sum even digits:"));
let sumEvenDigits = 0, temp14 = n14;
while (temp14 > 0) {
    let digit = temp14 % 10;
    if (digit % 2 === 0) sumEvenDigits += digit;
    temp14 = Math.floor(temp14 / 10);
}
console.log("Sum of even digits:", sumEvenDigits);

// 15. Days in Month
let month = Number(prompt("Q15: Enter month (1-12):"));
let year = Number(prompt("Enter year:"));
let days;
if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        days = 29;
    } else {
        days = 28;
    }
} else if ([4, 6, 9, 11].includes(month)) {
    days = 30;
} else {
    days = 31;
}
console.log(`Days in month ${month} of year ${year}:`, days);
