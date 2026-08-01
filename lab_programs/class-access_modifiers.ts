class LibraryAccount {
    // PUBLIC: Anyone can see the member's name
    public memberName: string;

    // PRIVATE: Only the class logic can access borrowed books and password
    // This prevents changes from outside
    private borrowedBooks: number;
    private password: string;

    // PROTECTED: Shared with "child" classes
    protected rewardPoints: number = 0;
    constructor(name: string, books: number, pass: string) {
        this.memberName = name;
        this.borrowedBooks = books;
        this.password = pass;
    }

    // PUBLIC METHOD: The "gateway" to access private data
    public borrowBook(count: number, enteredPassword: string): void {
        if (this.verifyPassword(enteredPassword)) {
            this.borrowedBooks += count;
            console.log(
                `${count} book(s) borrowed successfully. Total Borrowed: ${this.borrowedBooks}`
            );
        } else {
            console.log("Incorrect Password. Access Denied.");
        }
    }

    // PRIVATE METHOD: Internal logic used only by the class itself
    private verifyPassword(pass: string): boolean {
        return this.password === pass;
    }
}

// Inheritance to demonstrate PROTECTED
class PremiumLibraryAccount extends LibraryAccount {
    public addReward(): void {
        // We can access rewardPoints because it's PROTECTED
        this.rewardPoints += 20;
        console.log(`Reward Points: ${this.rewardPoints}`);
        // ERROR: Property 'borrowedBooks' is private and only accessible within class 'LibraryAccount'
        // this.borrowedBooks++;
    }
}

// ---- Execution ----
const myLibrary = new LibraryAccount("Harshitha", 2, "lib123");

// 1. Accessing PUBLIC properties
console.log(`Member: ${myLibrary.memberName}`); // Works fine

// 2. Accessing PRIVATE properties/methods
// console.log(myLibrary.borrowedBooks);   // ERROR: Property 'borrowedBooks' is private
// myLibrary.verifyPassword("lib123");     // ERROR: Method 'verifyPassword' is private

// 3. Using the PUBLIC "Gateway" method
myLibrary.borrowBook(1, "lib123"); // Success! Internal logic handles the private data.