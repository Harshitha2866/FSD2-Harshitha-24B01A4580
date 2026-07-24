import promptSync from "prompt-sync";

const prompt = promptSync();

class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    // Constructor to initialize employee details
    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    // Display public and private members
    displayEmployee(): void {
        console.log("\nEmployee Details");
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

class Manager extends Employee {

    // Access the protected member using inheritance
    displayDepartment(): void {
        console.log("Department:", this.department);
    }
}

let name = prompt("Enter employee name: ");
let salary = Number(prompt("Enter salary: "));
let department = prompt("Enter department: ");

let manager = new Manager(name, salary, department);

manager.displayEmployee();
manager.displayDepartment();