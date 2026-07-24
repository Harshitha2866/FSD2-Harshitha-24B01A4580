//1. Parameters and Return Types (Explicit)
function getStudentName(name: string): string {
    return `Student Name: ${name}`;
}
//Default Parameters
function getCourse(course: string = "CSE"): string {
    return `Course: ${course}`;
}

//2. Optional Parameter (using ?)
//'section' can be skipped while calling this function
function studentDetails(rollNo: number, section?: string): void {
    console.log(`Roll Number: ${rollNo}`);
    if (section) {
        console.log(`Section: ${section}`);
    }
}

//3. Rest Parameters (using ...)
//Captures multiple marks into a single array
function calculateMarks(...marks: number[]): number {
    return marks.reduce((total, current) => total + current, 0);
}

//Testing Program
console.log(getStudentName("Harshitha"));
//console.log(getStudentName(123)); // Error because number is not assignable to string
console.log(getCourse());         // Uses default course
console.log(getCourse("AI&DS"));  // Overrides default course
studentDetails(4580);
studentDetails(4581, "A");
const total = calculateMarks(85, 90, 88);
console.log(`Total Marks: ${total}`);