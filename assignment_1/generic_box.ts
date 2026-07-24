import promptSync from "prompt-sync";

const prompt = promptSync();

class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log("Value:", this.value);
    }
}

let numberValue = Number(prompt("Enter a number: "));
let stringValue = prompt("Enter a string: ");

let numberBox = new Box<number>(numberValue);
let stringBox = new Box<string>(stringValue);

console.log("\nNumber Box");
numberBox.display();

console.log("\nString Box");
stringBox.display();