let binary = "1010";
let decimal = 0;
let power = 0;

// Convert binary to decimal starting from the last digit
for (let i = binary.length - 1; i >= 0; i--) {
    let digit = Number(binary[i]);

    decimal += digit * (2 ** power);
    power++;
}

console.log("Decimal Number =", decimal);
export{}