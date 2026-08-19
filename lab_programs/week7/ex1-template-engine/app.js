// Import Express
import express from "express";

// Create Express app
const app = express();

// Set port
const port = 3000;

// Use EJS template engine
app.set("view engine", "ejs");

// Read form data
app.use(express.urlencoded({ extended: true }));

// Display form
app.get("/", (req, res) => {
    res.render("index", {
        title: "Student Registration",
        error: null,
        student: null
    });
});

// Handle form submission
app.post("/register", (req, res) => {

    // Get student name and branch
    const { name, branch } = req.body;

    // Validate name
    if (!name || name.length < 3) {

        return res.render("index", {
            title: "Registration Failed",
            error: "Name must be at least 3 characters long.",
            student: null
        });
    }

    // Successful registration
    res.render("index", {
        title: "Registration Successful",
        error: null,
        student: name
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});