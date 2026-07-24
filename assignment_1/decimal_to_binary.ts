import promptSync from "prompt-sync";

const prompt = promptSync();

let decimal = Number(prompt("Enter a decimal number: "));
let binary = "";

if (decimal === 0) {
    binary = "0";
} else {
    while (decimal > 0) {
        let remainder = decimal % 2;
        binary = remainder + binary;

        // Divide the number by 2
        decimal = Math.floor(decimal / 2);
    }
}

console.log("Binary Number =", binary);