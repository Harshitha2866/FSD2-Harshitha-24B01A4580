import promptSync from "prompt-sync";

const prompt = promptSync();

let number = Number(prompt("Enter a number: "));
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    // Check divisibility from 2 to square root ofnumber
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("Prime Number");
} else {
    console.log("Not a Prime Number");
}