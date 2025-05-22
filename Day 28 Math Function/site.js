let P = prompt("Enter the principal amount: "); 
let r = prompt("Enter the rate amount: "); 
let t = prompt("Enter the time amount: "); 


console.log(P * Math.pow(1 + r / 100, t) - P);
