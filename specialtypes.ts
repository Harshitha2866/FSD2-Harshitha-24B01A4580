//1. Any programs
// let data: any = 500;
// data.toUpperCase(); // No compile-time error, but runtime error
let student: any = "Rahul";
console.log(student.length); // No compile-time error
console.log("\n");

//2. Unknown programs
let item1: unknown = "TypeScript";
if (typeof item1 === "string") {
    console.log(item1.toUpperCase());
}
let item2: unknown = 25;
if (typeof item2 === "number") {
    console.log(item2 * 2);
}
console.log("\n");

//3. Void programs
function displayMessage1(): void {
    console.log("Good Morning");
}
displayMessage1();
function displayMessage2(): void {
    console.log("Welcome to TypeScript");
}
displayMessage2();
console.log("\n");

//4. Never programs
function showError(): never {
    throw new Error("Invalid Input");
}
// showError(); // Uncomment to see the error
function forever(): never {
    while (true) {
        console.log("Running....");
    }
}
// forever(); // Don't run, infinite loop
console.log("Never examples declared");