// Dependencies
const express = require("express");
const mongojs = require("mongojs");
const bodyParser = require("body-parser");
const cheerio = require("cheerio");
const request = require("request");
const logger = require("morgan");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const chalkAnimation = require('chalk-animation');

// Initialize Express
const app = express();

// Set up a static folder (public) for our web app
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({
  extended: false
}));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/family");
// Database configuration
// Save the URL of our database as well as the name of our collection
const databaseUrl = "family";
const donorCollection = ["donorCollection"];
const volCollection = ["volCollection"];
const shelterCollection = ["shelterCollection"];


// Use mongojs to hook the database to the db variable
const db = mongoose.connection;

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.listen(3000, function() {
  chalkAnimation.rainbow("App running on port 3000!");
});

app.get('/', function(req, res) {
  res.render("index");
});