import express from 'express';
import mongoose from 'mongoose';
const app = express();
app.set('view engine', 'ejs');
const PORT = 3000;
// Middleware
app.use(express.json());
// --- STEP 1 & 2: MongoDB ATLAS Configuration & Connection ---
const dbURI = "mongodb://harshitha280606_db_user:Harshitha%400606@ac-uhedcvt-shard-00-00.rl0rljj.mongodb.net:27017,ac-uhedcvt-shard-00-01.rl0rljj.mongodb.net:27017,ac-uhedcvt-shard-00-02.rl0rljj.mongodb.net:27017/LibraryDB?ssl=true&replicaSet=atlas-ylaehc-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(dbURI)
    .then(() => console.log("Connected to MongoDB Atlas successfully!"))
    .catch((err) => console.error("Database connection error:", err));
// --- STEP 3: Create Schema and Model ---
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    bookNumber: {
        type: Number,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
});
const Book = mongoose.model('Book', bookSchema);
// --- STEP 4 & 5: CRUD Operations & RESTful Services ---
/**
 * CREATE: Add a new book to the database (POST request)
 */
app.post('/books', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(400).json({
            message: "Error saving book",
            error: error.message
        });
    }
});
/**
 * READ: Get all books from the database (GET request)
 */
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching books",
            error: error.message
        });
    }
});
/**
 * UPDATE: Modify a book's data by their ID (PUT request)
 */
app.put('/books/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedBook)
            return res.status(404).json({
                message: "Book not found"
            });
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({
            message: "Error updating book",
            error: error.message
        });
    }
});
/**
 * DELETE: Remove a book by their ID (DELETE request)
 */
app.delete('/books/:id', async (req, res) => {
    try {
        const deletedBook =
            await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook)
            return res.status(404).json({
                message: "Book not found"
            });
        res.status(200).json({
            message: "Book record deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting book",
            error: error.message
        });
    }
});
app.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.render('apphome', { books });
    } catch (error) {
        res.status(500).send("Error loading books");
    }
});
// --- Start the Express Server ---
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log("Ready for CRUD operations testing.");
});