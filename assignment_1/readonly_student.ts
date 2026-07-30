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

let student = new Student(101, "Harshitha", "AI & Data Science");

student.displayDetails();

// student.studentId = 1234; // Error: Cannot assign to 'studentId' because it is a readonly property.