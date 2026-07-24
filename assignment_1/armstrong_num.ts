import promptSync from "prompt-sync";

const prompt = promptSync();

let number = Number(prompt("Enter a number: "));
let copy = number;
let result = 0;

// Count the number of digits
let count = number.toString().length;

while (copy > 0) {
    let digit = copy % 10;

    // Raise each digit to the power of total digits
    result += digit ** count;

    // Remove the last digit
    copy = Math.floor(copy / 10);
}

if (result === number) {
    console.log("Armstrong Number");
} else {
    console.log("Not an Armstrong Number");
}