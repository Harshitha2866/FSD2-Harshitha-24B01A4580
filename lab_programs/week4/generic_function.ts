// Returns first element

function firstItem<T>(items: T[]): T {

    return items[0];
}

// Packs an item

function packItem<T>(item: T): { product: T, date: Date } {

    return {
        product: item,
        date: new Date()
    };
}

// Strings
let fruits = ["Apple", "Orange", "Mango"];

console.log(firstItem<string>(fruits));

// Numbers
let prices = [100, 200, 300];

console.log(firstItem<number>(prices));

// Objects
interface Book {

    title: string;
    author: string;
}

const book: Book = {

    title: "Python",
    author: "ABC"
};

const packedBook = packItem<Book>(book);

console.log(packedBook.product.title);