import promptSync from "prompt-sync";

const prompt = promptSync();

let size = Number(prompt("Enter the number of elements: "));
let numbers: number[] = [];

for (let i = 0; i < size; i++) {
    numbers[i] = Number(prompt("Enter element " + (i + 1) + ": "));
}

let largest = numbers[0];
let secondLargest = numbers[0];

// Find the largest element
for (let i = 1; i < size; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

// Find the second largest element
for (let i = 0; i < size; i++) {
    if (numbers[i] > secondLargest && numbers[i] < largest) {
        secondLargest = numbers[i];
    }
}

console.log("Second Largest Number =", secondLargest);