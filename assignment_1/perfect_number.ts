import promptSync from "prompt-sync";

const prompt = promptSync();

let number = Number(prompt("Enter a number: "));
let sum = 0;

// Find the sum of all factors except the number itself
for (let i = 1; i < number; i++) {
    if (number % i === 0) {
        sum += i;
    }
}

if (sum === number) {
    console.log("Perfect Number");
} else {
    console.log("Not a Perfect Number");
}