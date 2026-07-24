import promptSync from "prompt-sync";

const prompt = promptSync();

let firstNumber = Number(prompt("Enter the first number: "));
let secondNumber = Number(prompt("Enter the second number: "));

let num1 = firstNumber;
let num2 = secondNumber;

// Find GCD using the Euclidean Algorithm
while (num2 !== 0) {
    let remainder = num1 % num2;
    num1 = num2;
    num2 = remainder;
}

let gcd = num1;

// LCM = (First Number × Second Number) / GCD
let lcm = (firstNumber * secondNumber) / gcd;

console.log("GCD =", gcd);
console.log("LCM =", lcm);