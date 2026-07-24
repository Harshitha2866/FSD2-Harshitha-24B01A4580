import promptSync from "prompt-sync";

const prompt = promptSync();

class Student {
    name: string;
    rollNumber: number;
    course: string;

    // Constructor to initialize student details
    constructor(name: string, rollNumber: number, course: string) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.course = course;
    }

    // Display the student details
    displayDetails(): void {
        console.log("\nStudent Details");
        console.log("Name :", this.name);
        console.log("Roll Number :", this.rollNumber);
        console.log("Course :", this.course);
    }
}

let name = prompt("Enter student name: ");
let rollNumber = Number(prompt("Enter roll number: "));
let course = prompt("Enter course: ");

let student = new Student(name, rollNumber, course);

student.displayDetails();