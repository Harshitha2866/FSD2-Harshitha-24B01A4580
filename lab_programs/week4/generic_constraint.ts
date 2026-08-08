// Interface with length property

interface Countable {

    length: number;
}

// Generic Constraint

function showLength<T extends Countable>(item: T): number {

    return item.length;
}

// Works
console.log(showLength("Programming"));

console.log(showLength([10, 20, 30, 40]));

// Error
// showLength(100);