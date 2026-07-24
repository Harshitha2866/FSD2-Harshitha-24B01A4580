import promptSync from "prompt-sync";

const prompt = promptSync();

let size = Number(prompt("Enter the number of elements: "));
let numbers: number[] = [];
let duplicateFound = false;

for (let i = 0; i < size; i++) {
    numbers[i] = Number(prompt("Enter element " + (i + 1) + ": "));
}

console.log("Duplicate Elements:");

// Compare each element with the remaining elements
for (let i = 0; i < size; i++) {
    let isDuplicate = false;

    // Check if the element has already been printed
    for (let k = 0; k < i; k++) {
        if (numbers[i] === numbers[k]) {
            isDuplicate = true;
            break;
        }
    }

    if (isDuplicate) {
        continue;
    }

    let count = 0;

    // Count the occurrences of the current element
    for (let j = 0; j < size; j++) {
        if (numbers[i] === numbers[j]) {
            count++;
        }
    }

    if (count > 1) {
        console.log(numbers[i]);
        duplicateFound = true;
    }
}

if (!duplicateFound) {
    console.log("No Duplicate Elements");
}