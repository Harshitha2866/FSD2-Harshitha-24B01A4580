let numbers: number[] = [10, 20, 30, 20, 40, 10];
let size = numbers.length;
let duplicateFound = false;

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