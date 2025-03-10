// ADD A FUNCTION CALLED CALCULATE
function calculate(number1, number2, operation) {
  let result;

  switch (operation) {
    case 'add':
      result = number1 + number2;
      break;
    case 'subtract':
      result = number1 - number2;
      break;
    case 'multiply':
      result = number1 * number2;
      break;
    case 'divide':
          if (number2 === 0) {
        result = 'An error: Second number cannot be zero';
      } else {
        result = number1 / number2;
      }
      break;
    default:
      result = 'Invalid operation';
  }
  return result;
}

function repeatOnce() {
    
    alert("This is a calculator that you can do two separate calculations with.");

// COLLECT FIRST NUMBER FROM USER
let number1 = parseFloat(prompt("Enter a first number."));

// COLLECT SECOND NUMBER FROM USER
let number2 = parseFloat(prompt("Enter a second number."));

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operation = prompt("Enter the mathematical operation you want to perform. Choose from add, subtract, multiply, or divide.").toLowerCase();

if (operation !== 'add' && operation !== 'subtract' && operation !== 'multiply' && operation !== 'divide') {
        alert ('Invalid entry. Choose add, subtract, multiply, or divide.');
} else {

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
let result = calculate(number1, number2, operation);
alert("The result is: " + result);
}

//ASK FOR NUMBERS AGAIN FOR SECOND CALCULATION
let number1Again = parseFloat(prompt("This is for a second calculation. Enter a first number."));
let number2Again = parseFloat(prompt("This is for a second calculation. Enter a second number."));

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER. IF INVALID ENTERED, USER IS RETURNED TO THE PROMPT
let operationAgain;
do {
operationAgain = prompt("Enter the mathematical operation you want to perform. Choose from add, subtract, multiply, or divide.").toLowerCase();
if (operationAgain !== 'add' && operationAgain !== 'subtract' && operationAgain !== 'multiply' && operationAgain !== 'divide') {
    alert ('Invalid entry. Choose add, subtract, multiply, or divide.');
}
} while (operationAgain !== 'add' && operationAgain !== 'subtract' && operationAgain !== 'multiply' && operationAgain !== 'divide');

 let result2 = calculate(number1Again, number2Again, operationAgain);
    alert("The result of the second calculation is: " + result2);
    } 
    repeatOnce();