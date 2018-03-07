const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const db = require("./models");
const router = require("./controllers/controller.js")
const sequelize = require("sequelize");
const chalkAnimation = require('chalk-animation');
const jade = require('jade');

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// Static directory
app.use(express.static("public"));

app.set('view engine', 'jade');
/////////////////////////////////
////////// PASSPORT /////////////
/////////////////////////////////
Set up middleware: passport and express session
app.use(session({
    secret: 'somethingsecretive',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


// Sets up ROUTES
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);
require('./routes/user-routes.js')(app);
require('./routes/favorite-routes.js')(app);
var authRoute = require('./routes/auth.js')(app, passport);

// load passport strategies
require('./config/passport.js')(passport, db.user);

// Routes
// =============================================================
var authRoute = require('./routes/auth.js')(app, passport);
const routes = require("./config/routes.js")
// app.use( "/", routes );
app.use("/", router, routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
    force: true,
    // force makes the db drop and recreate everytime you start the server
    logging: true

}).then(function() {
    app.listen(PORT, function() {
        // console.log("App is running " + PORT + "!")
        chalkAnimation.rainbow("App listening on port " + PORT + "!");
    });
});