import promptSync from "prompt-sync";

const prompt = promptSync();

let size = Number(prompt("Enter the number of elements: "));
let numbers: number[] = [];

for (let i = 0; i < size; i++) {
    numbers[i] = Number(prompt("Enter element " + (i + 1) + ": "));
}

let positions = Number(prompt("Enter the number of positions to rotate: "));

// Handle cases where positions are greater than the array size
positions = positions % size;

// Rotate the array
let rotatedArray = [...numbers.slice(positions), ...numbers.slice(0, positions)];

console.log("Rotated Array =", rotatedArray);
