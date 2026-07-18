"use strict";
//Variable Annotations
let empId = 1025;
let empName = "Rahul";
let isPermanent = false;
//Function Parameter and Return Type Annotations
function employeeDetails(name, id) {
    return `Employee ${name} has Employee ID ${id}`;
}
//Array Annotations
let departments = ["HR", "Finance", "Marketing", "IT", "Sales"];
//Using annotated variables and functions
const summary = employeeDetails(empName, empId);
console.log(summary);
console.log(`Departments in the company are: ${departments.join(", ")}`);
console.log(`Is the employee permanent? ${isPermanent ? "\tYes" : "\tNo"}`);
