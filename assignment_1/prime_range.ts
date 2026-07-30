let start = 10;
let end = 50;

let primes = "";

for (let number = start; number <= end; number++) {
    let isPrime = true;

    if (number <= 1) {
        isPrime = false;
    } else {
        // Check if the number is divisible by any value from 2 to √number
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        primes += number + " ";
    }
}

console.log("Prime numbers are:", primes);