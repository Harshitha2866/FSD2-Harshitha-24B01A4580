class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log("Value:", this.value);
    }
}

let numberBox = new Box<number>(100);
let stringBox = new Box<string>("Hello");

console.log("\nNumber Box");
numberBox.display();

console.log("\nString Box");
stringBox.display();