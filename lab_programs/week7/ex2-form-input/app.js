// Import Express
import express from "express";

// Create Express app
const app = express();

// Set port
const port = 3001;

// Use EJS template engine
app.set("view engine", "ejs");

// Read form data
app.use(express.urlencoded({ extended: true }));


// Display feedback form
app.get("/", (req, res) => {

    res.render("index", {
        error: null,
        message: null
    });

});


// Accept form input
app.post("/submit", (req, res) => {

    // Get values from form
    const { name, feedback } = req.body;

    // Basic validation
    if (!name || name.length < 3) {

        return res.render("index", {
            error: "Name must be at least 3 characters long.",
            message: null
        });

    }

    if (!feedback) {

        return res.render("index", {
            error: "Please enter your feedback.",
            message: null
        });

    }

    // Display submitted data
    res.render("index", {
        error: null,
        message: `Thank you ${name}! Your feedback was submitted.`
    });

});


// Start server
app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);

});