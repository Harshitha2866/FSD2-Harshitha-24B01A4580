import express from 'express';
const app = express();
const PORT = 3000;

/**
 * 1. ROUTE PARAMETERS(Identify a specific item)
 * Syntax: We use a colon ';' followed by a variable name to define a route parameter.
 * Example URL: http://localhost:3000/user/123
 */
app.get('/course/:code', (req, res) => {
    // Get the course code from the URL
    const courseCode = req.params.code;
    // Send the course information to the browser
    res.send(
        `<h1>Course Details</h1>
         <p>You selected course:
         <strong>${courseCode}</strong></p>`
    );
});

/**
 * 2. MULTIPLE ROUTE PARAMETERS
 * You can define multiple parameters in a single route.
 * Example URL: http://localhost:3000/flights/BOM/DEL
 */
app.get('/restaurant/:city/:area', (req, res) => {
    // Get both values from the URL
    const { city, area } = req.params;
    // Send both values as a response
    res.send(
        `Finding restaurants in
        <b>${city}</b>, area: <b>${area}</b>.`
    );
});

/**
 * 3. QUERY PARAMETERS (Filter or Search)
 * Unlike Route Params, you DON'T define Query Params in the route path.
 * Express simply listens for the '?' in the URL automatically.
 * Example URL: http://localhost:3000/restaurant/city/area
 */
app.get('/movies', (req, res) => {
    // Get the genre from the query parameter
    const genre = req.query.genre;
    // Get the year from the query parameter
    const year = req.query.year;
    //NOTE: If the user doesn't provide these in the URL, the variables will be undefined. You can set default values or handle missing parameters as needed.
    res.json({
        message: "Movie Search Results",
        selectedGenre: genre || "All",
        selectedYear: year || "All"
    });
});

/**
 * 4. STARTING THE SERVER
 * This starts the Express server.
 * The server listens for incoming requests on the specified PORT.
 */
app.listen(PORT, () => {
    // Display a message in the terminal
    console.log(`Dynamic URL server running at http://localhost:${PORT}`);
    // Tell the developer that the server is ready
    console.log('Press Ctrl+C to stop the server');
});

/** 5. URLs
 * Visit the following URLs in your browser to test the routes:
 * Route Parameters: Visit http://localhost:3000/course/123 for a course with code 123.
 * Multiple Route Parameters: Visit http://localhost:3000/restaurant/Bangalore/Indiranagar for restaurants in Bangalore, Indiranagar.
 * Query Parameters: Visit http://localhost:3000/movies?genre=Action&year=2022 for movies of genre Action released in 2022.
 */