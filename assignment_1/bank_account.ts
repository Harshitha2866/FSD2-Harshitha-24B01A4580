import promptSync from "prompt-sync";

const prompt = promptSync();

class BankAccount {
    accountHolder: string;
    balance: number;

    // Constructor to initialize account details
    constructor(accountHolder: string, balance: number) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    // Deposit money into the account
    deposit(amount: number): void {
        this.balance += amount;
        console.log("Amount Deposited:", amount);
    }

    // Withdraw money from the account
    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Amount Withdrawn:", amount);
        } else {
            console.log("Insufficient Balance");
        }
    }

    // Display the current balance
    displayBalance(): void {
        console.log("Current Balance:", this.balance);
    }
}

let accountHolder = prompt("Enter account holder name: ");
let balance = Number(prompt("Enter initial balance: "));

let account = new BankAccount(accountHolder, balance);

let depositAmount = Number(prompt("Enter amount to deposit: "));
account.deposit(depositAmount);

let withdrawAmount = Number(prompt("Enter amount to withdraw: "));
account.withdraw(withdrawAmount);

account.displayBalance();