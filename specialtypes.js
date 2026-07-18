"use strict";
//any programs
// let data: any = 500;
// data.toUpperCase(); // No compile-time error, but runtime error
let student = "Rahul";
console.log(student.length); // No compile-time error
console.log("\n");
//unknown programs
let item1 = "TypeScript";
if (typeof item1 === "string") {
    console.log(item1.toUpperCase());
}
let item2 = 25;
if (typeof item2 === "number") {
    console.log(item2 * 2);
}
console.log("\n");
//void programs
function displayMessage1() {
    console.log("Good Morning");
}
displayMessage1();
function displayMessage2() {
    console.log("Welcome to TypeScript");
}
displayMessage2();
console.log("\n");
//never programs
function showError() {
    throw new Error("Invalid Input");
}
// showError(); // Uncomment to see the error
function forever() {
    while (true) { }
}
// forever(); // Don't run, infinite loop
console.log("Never examples declared");
