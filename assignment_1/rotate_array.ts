let numbers: number[] = [10, 20, 30, 40, 50];
let size = numbers.length;

let positions = 2;

// Handle cases where positions are greater than the array size
positions = positions % size;

// Rotate the array
let rotatedArray = [...numbers.slice(positions), ...numbers.slice(0, positions)];

console.log("Rotated Array =", rotatedArray);
export{}