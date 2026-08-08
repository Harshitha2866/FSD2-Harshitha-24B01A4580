/**
 * 1. IMPORTANT EXPRESS
 * We require the 'express' module which will be installed via npm.
 * This gives us the tools to handle web requests and responses.
 */
import express from 'express';

/**
 * 2. INITIALIZE THE APP
 * We call the express function to create an 'app' object.
 * Think of this object as the "brain" of your web server.
 */
const app = express();

/**
 * 3. SETTING THE PORT
 * This is the 'address' or 'door' on your computer where the server lives.
 * 3000 is a standard choice for local development.
 */
const PORT = 3000;


// ROUTING SECTION: How the server handles different URLs

/**
 * 4. THE HOME ROUTE (GET Request)
 * app.get() tells the server: "When a user visits this URL, do this".
 * '/' represents the root (main page) of the website.
 * 'req' (Request) = Information coming FROM the user.
 * 'res' (Response) = What the server sends BACK to the user.
 */
app.get('/', (req, res) => {

    res.send('<h1>Welcome to my Express Server</h1><p>This is the home page.</p>');

});

/**
 * 5. THE ABOUT ROUTE
 * This handles 'http://localhost:3000/about' requests and sends back a simple message.
 */

// GET route for the About page
app.get('/about', (req, res) => {

    // Send a response to the client
    res.send('<h1>About Us</h1><p>This server was built using Express.js, a popular Node.js framework for building web applications.</p>');

});

/**
 * 6. THE DATA (JSON) ROUTE
 * Modern apps often send data instead of text.
 * .json() automatically formats your JavaScript object into JSON, which is a standard format for data exchange.
 * that other apps or frontend frameworks (like React) can read.
 */

// GET route for the API status endpoint
app.get('/api/status', (req, res) => {

    res.json({
        active: true,
        version: "1.0.0",
        message: "Server is running smoothly"
    });

});

/**
 * 7. STARTING THE SERVER
 * This line actually turns the server "on" and listens for incoming requests on the specified port.
 * It tells the app to start listening for traffic on our defined PORT.
 */

// Start the Express server
app.listen(PORT, () => {

    // This message only appears in the terminal, not in the browser.
    // It confirms that the server is running and listening for requests.
    // It lets the developer know everything started correctly and the server is ready to handle requests.

    // Display a message when the server starts
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');

});

/**
 * Visit http://localhost:3000 in your web browser to see the home page.
 * Visit http://localhost:3000/about to see the about page.
 * Visit http://localhost:3000/api/status to see the JSON response or data.
 */