//1. Variable Annotations
let empId: number = 1025;
let empName: string = "Anne";
let isPermanent: boolean = false;

//2. Function Parameter and Return Type Annotations
function employeeDetails(name: string, id: number): string {
    return `Employee ${name} has Employee ID ${id}`;
}

//3. Array Annotations
let departments: string[] = ["HR", "Finance", "Marketing", "IT", "Sales"];

//4. Using annotated variables and functions
const summary: string = employeeDetails(empName, empId);
console.log(summary);
console.log(`Departments in the company are: ${departments.join(", ")}`);
console.log(`Is the employee permanent? ${isPermanent ? "\tYes" : "\tNo"}`);