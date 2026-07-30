let text = "programming";
let result = "";

// Check each character in the string
for (let i = 0; i < text.length; i++) {
    let ch = text[i];

    // Add the character only if it is not already present
    if (!result.includes(ch)) {
        result += ch;
    }
}

console.log("String after removing duplicates:", result);
export{}