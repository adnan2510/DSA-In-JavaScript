// Do While Loop

//============================================================================================================================

//Q. Repeat hello

// let userInput;

// do {
//     console.log("Hello");
//     userInput = prompt("Do you want to continue? (yes/no)").toLowerCase();
// } while (userInput === "yes");

//============================================================================================================================

//Q. Guess the number

// let com = Math.floor(Math.random() * 100) + 1;

// let userInput;

// do {
//     userInput = Number(parseInt(prompt("Guess the number between 1 and 100: ")));
// if (isNaN(userInput) || userInput < 0 || userInput > 100) {
//         console.log("Please enter a valid number.");
//         continue; // Skip the rest of the loop if input is not a number
//     }
//     if (userInput < com) {
//         console.log("Too low! Try again.");
//     } else if (userInput > com) {
//         console.log("Too high! Try again.");
//     } else {
//         console.log("Congratulations!😍 You guessed the number." + com);
//     }
// }while (userInput !== com);

//============================================================================================================================

//Q. sasta Calculator

do{
    let num1 = Number(prompt("Enter first number: "));
    let num2 = Number(prompt("Enter second number: "));
    let operator = prompt("Enter operator (+, -, *, /): ");

    switch (operator) {
        case "+":
            console.log("Result = "+ (num1 + num2));
            break;
    case "-":
            console.log("Result = "+ (num1 - num2));
            break;
        case "*":       
            console.log("Result = "+ (num1 * num2));
            break;
        case "/":
            if (num2 !== 0) {
                console.log("Result = "+ (num1 / num2));
            } else {
                console.log("Error: Division by zero is not allowed.");
            }
            break;
        default:
            console.log("Invalid operator. Please use +, -, *, or /.");
            break;
    }
userInput = prompt("Do you want to continue? (yes/no)").toLowerCase();
}while(userInput === "yes");

//============================================================================================================================
