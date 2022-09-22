// * Import Server Dependencies
// ? -------------------------------------------------------------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()
// ? -------------------------------------------------------------------------------------------------------

// * Import Routes
// ? -------------------------------------------------------------------------------------------------------

// ? -------------------------------------------------------------------------------------------------------

// * Create Instance of Express
const app = express();

// * Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3000;

// * Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// * Use express.static to serve the public folder as a static directory
app.use(express.static('public'));

// * Get our mongo db string from our .env file
const MONGODB_URI = process.env.MongoDB;

// * Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// * Routes
// ? -------------------------------------------------------------------------------------------------------

// ? -------------------------------------------------------------------------------------------------------

// * Start the server
app.listen(PORT, function() {
    console.log(`App running on port ${PORT}!`);
});