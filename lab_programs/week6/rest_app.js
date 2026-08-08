import express from 'express';
const app = express();
const PORT = 3000;

/**
 * MIDDLEWARE
 * This is essential for handling JSON data.
 * It allows Express to read JSON data sent in the body of POST and PUT requests.
 */
app.use(express.json());

/**
 * MOCK DATABASE
 * This is a simple array used as a temporary database.
 * It stores event information.
 */
let events = [
    { id: 1, name: "Tech Fest", venue: "Main Auditorium" },
    { id: 2, name: "Cultural Night", venue: "Open Ground" }
];

// ROUTES

/**
 * 1. GET - Read all events
 * This route returns all events.
 * URL: http://localhost:3000/events
 */
app.get('/events', (req, res) => {
    res.json(events);    // Send all events as JSON
});

/**
 * 2. POST - Create a new event
 * This route is used to add a new event.
 * URL: http://localhost:3000/events
 * Rule: The client sends a JSON body like: { "id": 3, "name": "Music Concert", "venue": "City Hall" }
 * Note: If the client doesn't provide an ID, the server will auto-generate it by taking the length of the tasks array+1, 
 * which is not a good practice in real world apps but works for this demo.
 * The client sends event details as JSON in the request body.
 */
app.post('/events', (req, res) => {
    const newEvent = {    // Create a new event using the data sent by the client
        id: req.body.id != null? req.body.id : events.length + 1,   // Use the ID provided by the user.
        name: req.body.name,    // Get the event name from the request body
        venue: req.body.venue   // Get the venue from the request body
    };
    events.push(newEvent);    // Add the new event to the events array
    res.status(201).json(newEvent);    // Send the newly created event as JSON. 201 means "Created Successfully"
});

/**
 * 3. PUT - Update an existing event
 * This route uses a Dynamic URL.
 * :id is a Route Parameter.
 * URL Example: http://localhost:3000/events/1
 */
app.put('/events/:id', (req, res) => {
    const id = parseInt(req.params.id);    // Get the ID from the URL
    const event = events.find(e => e.id === id);    // Find the event with the given ID
    if (event) {    // Check whether the event exists
        event.name = req.body.name;   // Update the event name with the value sent in the request body
        event.venue = req.body.venue;    // Update the event venue with the value sent in the request body
        res.json({    // Send the updated event as JSON
            message: "Event updated successfully",
            event: event
        });
    } else {
        // Send an error if the event was not found
        // 404 means "Not Found"
        res.status(404).json({error: "Event not found"});
    }
});

/**
 * 4. DELETE - Remove an event
 * This route uses a Dynamic URL.
 * :id identifies the event that should be deleted.
 * URL Example: http://localhost:3000/events/2
 */
app.delete('/events/:id', (req, res) => {
    const id = parseInt(req.params.id);    // Get the event ID from the URL
    events = events.filter(e => e.id !== id);    // Remove the event with the matching ID
    // Send a confirmation message and remaining events
    res.json({
        message: `Event ${id} deleted`,
        remainingEvents: events
    });
});

app.listen(PORT, () => {
    // Display a message in the terminal
    console.log(`REST API Server running at http://localhost:${PORT}`);
    // Tell the developer that the server is ready
    console.log('Listening for requests...');
});

/**
 * URLs
 * GET - Visit http://localhost:3000/events
 * POST - Visit http://localhost:3000/events
 * PUT - Visit http://localhost:3000/events/1
 * DELETE - Visit http://localhost:3000/events/2
 * You can change the the id in the URL to see different responses.
 */