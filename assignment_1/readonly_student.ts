import promptSync from "prompt-sync";

const prompt = promptSync();

class Student {
    readonly studentId: number;
    name: string;
    course: string;

    // Constructor to initialize student details
    constructor(studentId: number, name: string, course: string) {
        this.studentId = studentId;
        this.name = name;
        this.course = course;
    }

    // Display student details
    displayDetails(): void {
        console.log("\nStudent Details");
        console.log("Student ID:", this.studentId);
        console.log("Name:", this.name);
        console.log("Course:", this.course);
    }
}

let studentId = Number(prompt("Enter Student ID: "));
let name = prompt("Enter Student Name: ");
let course = prompt("Enter Course: ");

let student = new Student(studentId, name, course);

student.displayDetails();

// student.studentId = 1234; // Error: Cannot assign to 'studentId' because it is a readonly property.