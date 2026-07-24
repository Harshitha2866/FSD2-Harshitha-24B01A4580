import promptSync from "prompt-sync";

const prompt = promptSync();

let size = Number(prompt("Enter the number of elements: "));
let numbers: number[] = [];
let count: { [key: number]: number } = {};

for (let i = 0; i < size; i++) {
    numbers[i] = Number(prompt("Enter element " + (i + 1) + ": "));
}

// Count the occurrences of each element
for (let i = 0; i < size; i++) {
    if (count[numbers[i]]) {
        count[numbers[i]]++;
    } else {
        count[numbers[i]] = 1;
    }
}

console.log("Occurrences of each element:");

// Display each element with its count
for (let key in count) {
    console.log(key + " : " + count[key]);
}