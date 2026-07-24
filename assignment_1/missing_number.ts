import promptSync from "prompt-sync";

const prompt = promptSync();

let size = Number(prompt("Enter the number of elements: "));
let numbers: number[] = [];

for (let i = 0; i < size; i++) {
    numbers[i] = Number(prompt("Enter element " + (i + 1) + ": "));
}

// Calculate the expected sum of numbers from 1 to size + 1
let expectedSum = ((size + 1) * (size + 2)) / 2;

let actualSum = 0;

// Find the sum of the given array elements
for (let i = 0; i < size; i++) {
    actualSum += numbers[i];
}

let missingNumber = expectedSum - actualSum;

console.log("Missing Number =", missingNumber);