// Generic class

class Storage<T> {

    private value: T;

    constructor(item: T) {
        this.value = item;
    }

    public getValue(): T {

        console.log("Getting value...");
        return this.value;
    }

    public setValue(newItem: T): void {

        this.value = newItem;
        console.log("Value Updated");
    }

}

// Number
const numberBox = new Storage<number>(100);
console.log(numberBox.getValue());

// String
const textBox = new Storage<string>("TypeScript");
console.log(textBox.getValue());

// Object
interface Laptop {

    brand: string;
    ram: number;
}

const laptopBox = new Storage<Laptop>({
    brand: "Dell",
    ram: 16
});

console.log(laptopBox.getValue());