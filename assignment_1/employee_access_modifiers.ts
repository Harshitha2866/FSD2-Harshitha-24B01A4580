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

let manager = new Manager("Harshitha", 50000, "IT");

manager.displayEmployee();
manager.displayDepartment();