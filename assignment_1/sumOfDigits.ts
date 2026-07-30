let number = 12345;
let copy = number;
let total = 0;

while (copy > 0) {
    let digit = copy % 10;
    total += digit;

    // Remove the last digit
    copy = Math.floor(copy / 10);
}

console.log("Sum of Digits =", total);
export{}