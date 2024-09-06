


// loops  are used to repeatedly run a block of code as long as a specified condition is true.
// for ( initialization; condition; increment){
// }
//  for (let num = 1; num <= 5; num++){
//     console.log('hello ' + num);
//  }

// for (let num = 10; num >= 0; num--){
//     console.log(num);
// }

// for( let num = 3; num < 20; num+=3){
//     console.log(num);
// }

// let isShopOpen = true;
// while( isShopOpen === true){
//     console.log('buy bread'); 
//     isShopOpen = false;
// }

// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while (i > 5);
    
// let person = {
//     fname: "john",
//     lname: "doe",
//     age: 25,
// };
// for( let key in person){
//     console.log( key )
// }
// Define the Calculate function
function Calculate(num1, num2, operation) {
    // Ensure num1 and num2 are numbers and operation is a string
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof operation !== 'string') {
        return 'Invalid input types. num1 and num2 must be numbers, and operation must be a string.';
    }
    
    // Perform the operation based on the user's input
    let result;
    switch (operation.toLowerCase()) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return 'Error: Division by zero is not allowed.';
            }
            result = num1 / num2;
            break;
        case 'modulus':
            result = num1 % num2;
            break;
        default:
            return 'Invalid operation. Please use "add", "subtract", "multiply", "divide", or "modulus".';
    }

    return result;
}

// Get user input
function getUserInput() {
    let num1 = parseFloat(prompt('Enter the first number:'));
    let num2 = parseFloat(prompt('Enter the second number:'));
    let operation = prompt('Enter the operation (add, subtract, multiply, divide, modulus):');

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        alert('Invalid input. Please enter valid numbers.');
        return;
    }
    if (typeof operation !== 'string' || !['add', 'subtract', 'multiply', 'divide', 'modulus'].includes(operation.toLowerCase())) {
        alert('Invalid operation. Please enter one of the following: add, subtract, multiply, divide, modulus.');
        return;
    }

    // Call the Calculate function with user inputs
    let result = Calculate(num1, num2, operation);
    alert('Result: ' + result);
}

// Invoke the function to start the process
getUserInput();

