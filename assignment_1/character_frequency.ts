let text = "programming";
let frequency: { [key: string]: number } = {};

for (let i = 0; i < text.length; i++) {
    let ch = text[i];

    // Increase the count if the character already exists
    if (frequency[ch]) {
        frequency[ch]++;
    } else {
        // Store the character with count 1
        frequency[ch] = 1;
    }
}

console.log("Character Frequencies:");

// Display each character and its frequency
for (let ch in frequency) {
    console.log(ch + " : " + frequency[ch]);
}