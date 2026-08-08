class EmployeeSalary {
    //1. Properties (Fields)
    public employeeName: string;
    public basicSalary: number;
    public bonus: number;
    public taxRate: number; // In percentage (%)

    //2. Constructor Overloading
    // Signature 1: Default bonus and tax rate
    constructor(name: string, salary: number);
    // Signature 2: Custom bonus and tax rate
    constructor(name: string, salary: number, bonus: number, tax: number);
    //Implementation Signature
    constructor(name: string, salary: number, bonus?: number, tax?: number) {
        this.employeeName = name;
        this.basicSalary = salary;
        //Default values if bonus and tax are not provided
        this.bonus = bonus ?? 5000;
        this.taxRate = tax ?? 10;
    }

    //3. Methods
    public calculateNetSalary(): number {
        const taxAmount = (this.basicSalary * this.taxRate) / 100;
        return this.basicSalary + this.bonus - taxAmount;
    }
    //Method to display salary details
    public displayDetails(): void {
        console.log(`--- Salary Details ---`);
        console.log(`Employee: ${this.employeeName}`);
        console.log(`Basic Salary: ${this.basicSalary}`);
        console.log(`Bonus: ${this.bonus}`);
        console.log(`Tax Rate: ${this.taxRate}%`);
        console.log(`Net Salary: ${this.calculateNetSalary()}`);
    }
}

//Using the Class
const employee1 = new EmployeeSalary("Rahul", 50000);
const employee2 = new EmployeeSalary("Sneha", 70000, 8000, 12);
employee1.displayDetails();
employee2.displayDetails();
//Updating the basic salary
employee2.basicSalary = 75000;
console.log(`Updated Net Salary for Sneha: ${employee2.calculateNetSalary()} rupees`);