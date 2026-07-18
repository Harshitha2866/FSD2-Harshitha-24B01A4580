"use strict";
class DigitalWallet {
    // PUBLIC: Anyone can see the account holder's name
    holderName;
    // PRIVATE: Only the class logic can touch the balance and PIN
    // This prevents accidental or malicious changes from outside
    balance;
    secretPin;
    // PROTECTED: Shared with "child" classes (like a Premium Wallet)
    loyaltyPoints = 0;
    constructor(name, initialDeposit, pin) {
        this.holderName = name;
        this.balance = initialDeposit;
        this.secretPin = pin;
    }
    // PUBLIC METHOD: The gateway to interact with private data
    withdrawMoney(amount, enteredPin) {
        if (this.verifyPin(enteredPin)) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`₹${amount} withdrawn successfully. Remaining: ₹${this.balance}`);
            }
            else {
                console.log("Inadequate funds in your wallet!");
            }
        }
        else {
            console.log("Incorrect PIN. Transaction declined.");
        }
    }
    // PRIVATE METHOD: Internal logic used only by the class itself
    verifyPin(pin) {
        return this.secretPin === pin;
    }
}
// Inheritance to demonstrate PROTECTED
class PremiumWallet extends DigitalWallet {
    addBonus() {
        // We can access loyaltyPoints because it's PROTECTED
        this.loyaltyPoints += 100;
        console.log(`Bonus added! Total points: ${this.loyaltyPoints}`);
        // ERROR: Property 'balance' is private and only accessible within class 'DigitalWallet'
        // this.balance += 500;
    }
}
// ---- Execution ----
const myWallet = new DigitalWallet("Arjun Varma", 5000, 1234);
// 1. Accessing PUBLIC properties
console.log(`Welcome, ${myWallet.holderName}`); // Works fine
// 2. Accessing PRIVATE properties/methods
// console.log(myWallet.balance);      // ERROR: Property 'balance' is private
// myWallet.verifyPin(1234);           // ERROR: Method 'verifyPin' is private
// 3. Using the PUBLIC "Gateway" method
myWallet.withdrawMoney(1000, 1234); // Success! Internal logic handles the private data.
