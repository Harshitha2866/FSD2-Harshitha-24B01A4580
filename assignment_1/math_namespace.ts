namespace MathOperations {

    // Add two numbers
    export function add(a: number, b: number): number {
        return a + b;
    }

    // Subtract two numbers
    export function subtract(a: number, b: number): number {
        return a - b;
    }

    // Multiply two numbers
    export function multiply(a: number, b: number): number {
        return a * b;
    }

    // Divide two numbers
    export function divide(a: number, b: number): number {
        if (b === 0) {
            console.log("Division by zero is not possible.");
            return 0;
        }
        return a / b;
    }
}

let firstNumber = 20;
let secondNumber = 5;

console.log("Addition =", MathOperations.add(firstNumber, secondNumber));
console.log("Subtraction =", MathOperations.subtract(firstNumber, secondNumber));
console.log("Multiplication =", MathOperations.multiply(firstNumber, secondNumber));
console.log("Division =", MathOperations.divide(firstNumber, secondNumber));
export{}