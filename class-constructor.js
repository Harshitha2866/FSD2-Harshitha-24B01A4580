"use strict";
class EmployeeSalary {
    //1. Properties (Fields)
    employeeName;
    basicSalary;
    bonus;
    taxRate; // In percentage (%)
    //Implementation Signature
    constructor(name, salary, bonus, tax) {
        this.employeeName = name;
        this.basicSalary = salary;
        //Default values if bonus and tax are not provided
        this.bonus = bonus ?? 5000;
        this.taxRate = tax ?? 10;
    }
    //3. Methods
    calculateNetSalary() {
        const taxAmount = (this.basicSalary * this.taxRate) / 100;
        return this.basicSalary + this.bonus - taxAmount;
    }
    //Method to display salary details
    displayDetails() {
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
