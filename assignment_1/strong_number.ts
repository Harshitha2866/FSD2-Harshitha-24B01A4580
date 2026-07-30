let number = 145;
let copy = number;
let total = 0;

while (copy > 0) {
    let digit = copy % 10;
    let factorial = 1;

    // Find the factorial of the current digit
    for (let value = 1; value <= digit; value++) {
        factorial *= value;
    }

    total += factorial;

    // Remove the last digit
    copy = Math.floor(copy / 10);
}

if (total === number) {
    console.log("Strong Number");
} else {
    console.log("Not a Strong Number");
}
export{}