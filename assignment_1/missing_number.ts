let numbers: number[] = [1, 2, 3, 5];
let size = numbers.length;

// Calculate the expected sum of numbers from 1 to size + 1
let expectedSum = ((size + 1) * (size + 2)) / 2;

let actualSum = 0;

// Find the sum of the given array elements
for (let i = 0; i < size; i++) {
    actualSum += numbers[i];
}

let missingNumber = expectedSum - actualSum;

console.log("Missing Number =", missingNumber);
export{}