let numbers: number[] = [25, 10, 45, 30, 15];
let size = numbers.length;

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
export{}