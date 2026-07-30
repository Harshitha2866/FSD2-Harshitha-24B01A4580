let numbers: number[] = [10, 20, 10, 30, 20, 10];
let size = numbers.length;
let count: { [key: number]: number } = {};

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
export{}