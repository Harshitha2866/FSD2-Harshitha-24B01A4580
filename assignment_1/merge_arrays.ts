import promptSync from "prompt-sync";

const prompt = promptSync();

let size1 = Number(prompt("Enter the number of elements in the first array: "));
let array1: number[] = [];

for (let i = 0; i < size1; i++) {
    array1[i] = Number(prompt("Enter element " + (i + 1) + ": "));
}

let size2 = Number(prompt("Enter the number of elements in the second array: "));
let array2: number[] = [];

for (let i = 0; i < size2; i++) {
    array2[i] = Number(prompt("Enter element " + (i + 1) + ": "));
}

// Merge both arrays using the spread operator
let mergedArray = [...array1, ...array2];

console.log("Merged Array =", mergedArray);