// Leap Year Checker

// let year = prompt("Enter a Year:- ");

// let isLeap = false;     

// if(year % 4 == 0) { //2000, 2004, 2008, 2012, 2016, 2020, 2024
//     if (year % 100 == 0)// 1700, 1800, 1900
//          {
//         if (year % 400 == 0) isLeap = true; //1600, 2000, 2400
//          else isLeap = false ;//1700, 1800, 1900
        
//     } else {//2001, 2002, 2003, 2005, 2006, 2007, 2009, 2010, 2011, 2013, 2014, 2015, 2017, 2018, 2019, 2021, 2022, 2023
//         isLeap = true;
//     }
// }

// console.log(isLeap ? year + " is a Leap Year" : year + " is not a Leap Year"); //2000 is a Leap Year

// =================================================================================================================================

// Discount Calculator

// let price = Number(prompt("Enter the Price:- "));

// if (price >= 0 && price <= 5000) {
//     console.log(price);
// } else if (price > 5000 && price <= 7000) {
//     console.log(price - (price * 5 / 100)); // 5% discount
// } else if (price > 7000 && price <= 9000) {
//     console.log(price - (price * 10 / 100)); // 10% discount
// } else if (price > 9000) {
//     console.log(price - (price * 20 / 100)); // 20% discount
// } else {
//     console.log("Invalid input");
// }

// =================================================================================================================================

// elecricity bill calculator

// let units = Number(prompt("Enter the number of units consumed:- "));
// let amount = 0;

// if (units <= 100) {
//     amount = units * 4.2; // 4.2 per unit
// } else if (units > 100 && units <= 200) {   
//     amount = (100 * 4.2) + (units - 100) * 6; // 4.2 for first 100 units and 6 for next units
// } else if (units > 200 && units <= 400) {
//     amount = (100 * 4.2) + (100 * 6) + (units - 200) * 8; // 4.2 for first 100 units, 6 for next 100 units and  8 for next units
// } else if (units > 400) {   
//     amount = (100 * 4.2) + (100 * 6) + (200 * 8) + (units - 400) * 13;// 4.2 for first 100 units, 6 for next 100 units, 8 for next 200 units and 13 for next units
// }

//============================================================================================================================

// Reverse Electricity bill calculator

// let units = Number(prompt("Enter the number of units consumed:- "));// assume user input is 700
// let amount = 0;

// if (units > 400) {
//     amount =(units - 400) * 13;  // 700 - 400 = 300 * 13 = 3900
//     units = 400; // set units to 400 for next calculation
//     console.log(amount);
// }
// if (units > 200 && units <= 400) {
//     amount += (units - 200) * 8; //  400 - 200 = 200 * 8 = 1600 ,// 3900 + 1600 = 5500
//     units = 200; // set units to 200 for next calculation
//     console.log(amount);
// }
// if (units > 100 && units <= 200) {
//     amount += (units - 100) * 6; // 200 - 100 = 100 * 6 = 600,// 5500 + 600 = 6100
//     units = 100; // set units to 100 for next calculation
//     console.log(amount);
// }
// amount += units * 4.2; // 4.2 for first 100 units
// // 100 * 4.2 = 420,// 6100 + 420 = 6520
// console.log(amount); // total amount 6520
//=============================================================================================================================

// Indian Currency Notes Breakdown

// let amount = Number(prompt("Enter the amount in Indian Rupees:"));

// let note2000 = 0, note500 = 0, note200 = 0, note100 = 0, note50 = 0;
// let note20 = 0, note10 = 0, note5 = 0, note2 = 0, note1 = 0;

// if (amount >= 2000) {
//   note2000 = Math.floor(amount / 2000);
//   amount %= 2000;
// }
// if (amount >= 500) {
//   note500 = Math.floor(amount / 500);
//   amount %= 500;
// }
// if (amount >= 200) {
//   note200 = Math.floor(amount / 200);
//   amount %= 200;
// }
// if (amount >= 100) {
//   note100 = Math.floor(amount / 100);
//   amount %= 100;
// }
// if (amount >= 50) {
//   note50 = Math.floor(amount / 50);
//   amount %= 50;
// }
// if (amount >= 20) {
//   note20 = Math.floor(amount / 20);
//   amount %= 20;
// }
// if (amount >= 10) {
//   note10 = Math.floor(amount / 10);
//   amount %= 10;
// }
// if (amount >= 5) {
//   note5 = Math.floor(amount / 5);
//   amount %= 5;
// }
// if (amount >= 2) {
//   note2 = Math.floor(amount / 2);
//   amount %= 2;
// }
// if (amount >= 1) {
//   note1 = amount;
// }

// console.log(`₹2000 x ${note2000}`);
// console.log(`₹500 x ${note500}`);
// console.log(`₹200 x ${note200}`);
// console.log(`₹100 x ${note100}`);
// console.log(`₹50 x ${note50}`);
// console.log(`₹20 x ${note20}`);
// console.log(`₹10 x ${note10}`);
// console.log(`₹5 x ${note5}`);
// console.log(`₹2 x ${note2}`);
// console.log(`₹1 x ${note1}`);
// ====================================================================================================================

// Movie Rating Category

// let rating = Number(prompt("Enter movie rating (e.g., 4.9):"));
// let movie = prompt("Enter movie name:");

// if (rating >= 4.5) {
//   console.log(movie + " is a Super Hit.");
// } else if (rating >= 3.5) {
//   console.log(movie + " is a Hit.");
// } else if (rating >= 2.5) {
//   console.log(movie + " is Average.");
// } else if (rating >= 1.5) {
//   console.log(movie + " is a Flop.");
// } else {
//   console.log(movie + " is a Disaster.");
// }
// ====================================================================================================================

// Salary Calculation

let salary = Number(prompt("Enter your base salary:"));
let bonus = 0;

if (salary <= 10000) {
  bonus = 0;
} else if (salary <= 20000) {
  bonus = salary * 0.10;
} else if (salary <= 30000) {
  bonus = salary * 0.15;
} else {
  bonus = salary * 0.20;
}

let totalSalary = salary + bonus;
console.log("Base Salary: ₹" + salary);
console.log("Bonus: ₹" + bonus);
console.log("Total Salary: ₹" + totalSalary);
