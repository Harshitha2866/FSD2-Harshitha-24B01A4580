class Student {
    static collegeName: string = "Sri Vishnu Engineering College for Women";

    name: string;
    rollNumber: number;

    // Constructor to initialize student details
    constructor(name: string, rollNumber: number) {
        this.name = name;
        this.rollNumber = rollNumber;
    }

    // Static method to display the college name
    static displayCollege(): void {
        console.log("College Name:", Student.collegeName);
    }

    // Display student details
    displayDetails(): void {
        console.log("\nStudent Details");
        console.log("Name:", this.name);
        console.log("Roll Number:", this.rollNumber);
    }
}

let student = new Student("Harshitha", 101);

student.displayDetails();
Student.displayCollege();
export{}