import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();


// i) Configure Template Engine
app.set('view engine', 'ejs');


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// ii) Maintain Sessions
app.use(session({
    secret: 'movie-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));


// iv) Protect private routes
const authMiddleware = (req, res, next) => {

    if (req.session.isLoggedIn) {
        next();
    } else {
        res.redirect('/login');
    }

};


// Public Route: Login Page
app.get('/login', (req, res) => {

    res.render('login', {
        error: null
    });

});


// iii) Implement Login
app.post('/login', (req, res) => {

    const { username, password } = req.body;


    // Username: movieuser
    // Password: movie123

    if (username === 'movieuser' && password === 'movie123') {

        // Maintain login state
        req.session.isLoggedIn = true;
        req.session.username = username;


        // Create a custom cookie
        res.cookie(
            'lastBooking',
            new Date().toLocaleTimeString()
        );


        res.redirect('/dashboard');

    } else {

        res.render('login', {
            error: 'Invalid username or password!'
        });

    }

});


// iv) Private Route: Dashboard
app.get('/dashboard', authMiddleware, (req, res) => {

    // Read cookie
    const lastBooking = req.cookies.lastBooking || 'No previous booking';

    // Access session data
    const username = req.session.username;


    res.render('dashboard', {
        user: username,
        lastBooking: lastBooking
    });

});


// iii) Implement Logout
app.get('/logout', (req, res) => {

    req.session.destroy(() => {

        // Clear session cookie
        res.clearCookie('connect.sid');

        // Clear custom cookie
        res.clearCookie('lastBooking');

        res.redirect('/login');

    });

});


// Start Server
app.listen(3000, () => {
    console.log('Movie Server running at http://localhost:3000/login');
});