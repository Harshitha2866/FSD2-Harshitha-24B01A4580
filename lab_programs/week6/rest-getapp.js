import express from 'express';
const app = express();
const PORT = 3000;

/**
 * 1. BASIC JSON RESPONSE
 * When the user visits the root URL, we send a simple JSON object as a response.
 * The .json() method automatically sets the "Content-Type" header to "application/json".
 * Example URL: http://localhost:3000/
 * Note: The .json() method is a convenient way to send JSON responses in Express. 
 * .json() automatically sets the "Content-Type" to "application/json".
 */
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the Student Portal",
        status: "Active",
        department: "AI&DS",
        timestamp: new Date()
    });

});

/**
 * 2. SENDING AN ARRAY OF OBJECTS
 * This mimics a real-world database response.
 * The server sends multiple objects as a JSON array.
 */
app.get('/courses', (req, res) => {
    // Create a list of courses
    const courseList = [
        {id: 201, name: "Data Structures", credits: 4},
        {id: 202, name: "Machine Learning", credits: 3},
        {id: 203, name: "Web Development", credits: 3}
    ];
    // Sending the array as a JSON response
    res.json(courseList);
});

/**
 * 3. DYNAMIC JSON RESPONSE
 * Using Route Parameters to send data about a specific item.
 * URL Example: http://localhost:3000/course/201
 */
app.get('/course/:id', (req, res) => {
    // Get the course ID from the URL
    const courseId = req.params.id;
    // Send course information as JSON
    res.json({
        requestedId: courseId,
        name: "Data Structures",
        department: "Computer Science",
        credits: 4,
        available: true
    });
});

/**
 * 4. STARTING THE SERVER
 * This starts the Express server.
 * The server listens for incoming requests on the specified PORT.
 */
app.listen(PORT, () => {
    console.log(`JSON Server is running at http://localhost:${PORT}`);
});

/**
 * 5. URLs
 * Visit the following URLs in your browser to test the routes:
 * Basic JSON Response: Visit http://localhost:3000/ to see the welcome message.
 * Array of Objects: Visit http://localhost:3000/courses to see the list of courses.
 * Dynamic JSON Response: Visit http://localhost:3000/course/201 to see details for course with ID 201.
 * Note: You can change the course ID in the URL to see different responses.
 */
sdfsdfs
