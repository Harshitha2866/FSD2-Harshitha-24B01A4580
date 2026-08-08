import express from 'express';
const app = express();
const PORT = 3000;

/**
 * 1. BUILT-IN MIDDLEWARE
 * This allows Express to read JSON data sent in the body of POST or PUT requests.
 * Without this, req.body will be undefined.
 */
app.use(express.json());

/**
 * 2. CUSTOM LOGGING MIDDLEWARE (Global)
 * This middleware runs for EVERY request that reaches the server.
 * It records the time, HTTP method, and URL of the request.
 */
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString();    // Get the current date and time
    console.log(    // Display the request details in the terminal
        `[${timestamp}] Request: ${req.method} ${req.url}`
    );
    // IMPORTANT: next() tells Express to move to the next middleware or route.
    next();
});

/**
 * 3. CUSTOM SECURITY MIDDLEWARE
 * This middleware checks whether the request contains a User-Agent.
 * User-Agent gives information about the client or browser.
 */
app.use((req, res, next) => {
    const userAgent = req.get('User-Agent');    // Get the User-Agent from the request
    if (!userAgent) {    // Check whether User-Agent is available
        return res.status(400).json({   // Send an error response if it is missing
            error: "User-Agent information missing"
        });
    }
    // If everything is fine, continue to the next route
    next();
});

// MOCK DATABASE
//This is a simple array used as a temporary database. It stores library book information.
let books = [
    {id: 1, title: "Java Programming", author: "James"},
    {id: 2, title: "Database Systems", author: "Ravi"}
];

// ROUTES
/**
 * 4. GET - Read all books
 * This route returns all books from the mock database.
 */
app.get('/books', (req, res) => {
    res.json(books);    // Send all books as a JSON response
});

/**
 * 5. POST - Add a new book
 * Demonstrates handling data from req.body.
 */
app.post('/books', (req, res) => {
    const newBook = {    // Create a new book using the data sent by the client
        id: books.length + 1,    // Generate a new ID
        title: req.body.title,    // Get the title from the request body
        author: req.body.author    // Get the author from the request body
    };
    books.push(newBook);    // Add the new book to the array
    res.status(201).json(newBook);    // Send the newly created book
});

/**
 * 6. PUT - Update a book
 * Demonstrates route parameters and finding an object in an array.
 */
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);    // Get the book ID from the URL
    const book = books.find(b => b.id === id);    // Find the book with the matching ID
    if (book) {    // Check whether the book exists
        book.title = req.body.title;    // Update the book title
        book.author = req.body.author;    // Update the book author
        res.json({message: "Book updated successfully", book: book});    // Send the updated book as a response
    } else {
        // Send an error if the book was not found
        res.status(404).json({error: "Book not found"});
    }
});

/**
 * 7. DELETE - Remove a book
 * Demonstrates removing an object using a dynamic URL.
 */
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);     // Get the book ID from the URL
    books = books.filter(b => b.id !== id);    // Remove the book with the matching ID
    res.json({message: `Book ${id} deleted`, remainingBooks: books});    // Send the remaining books
});

/**
 * 8. STARTING THE SERVER
 * This starts the Express server.
 * The server listens for incoming requests on the specified PORT.
 */
app.listen(PORT, () => {
    console.log(`Library API Server running at http://localhost:${PORT}`);    // Display a message in the terminal
    console.log('Listening for requests...');    // Tell the developer that the server is ready
});

/**
 * URL: http://localhost:3000/books
 */
