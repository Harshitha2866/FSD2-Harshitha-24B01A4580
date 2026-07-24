import promptSync from "prompt-sync";
import { add, subtract, multiply, divide } from "./math.js";

const prompt = promptSync();

let firstNumber = Number(prompt("Enter the first number: "));
let secondNumber = Number(prompt("Enter the second number: "));

console.log("Addition =", add(firstNumber, secondNumber));
console.log("Subtraction =", subtract(firstNumber, secondNumber));
console.log("Multiplication =", multiply(firstNumber, secondNumber));
console.log("Division =", divide(firstNumber, secondNumber));