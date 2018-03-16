const express = require( "express" );
const router = express.Router();
// Requiring path to so we can use relative routes to our HTML files
var path = require( "path" );
var db = require( "../models" );


// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require( "../config/middleware/isAuthenticated" );

module.exports = function ( app ) {

  app.get( "/", function ( req, res ) {
    // If the user already has an account send them to the members page
    if ( req.user ) {
      res.redirect( "/members" );
    }
    res.sendFile( path.join( __dirname, "../public/signup.html" ) );
  } );

  app.get( "/login", function ( req, res ) {
    // If the user already has an account send them to the members page
    if ( req.user ) {
      res.redirect( "/members" );
    }
    res.sendFile( path.join( __dirname, "../public/login.html" ) );
  } );

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get( "/members", isAuthenticated, function ( req, res ) {
    res.sendFile( path.join( __dirname, "../public/members.html" ) );
    console.log( "req.user.id is:", req.user.id );


  } ); //end get/members

  app.get( "/members/recentcomments", function ( req, res ) {
    console.log( "req.user.email is:", req.user.email );

    db.Comment.findAll( {
        where: { reviewee: db.Volunteer.id }

      } ).then( function ( dbComments ) {

        res.json( dbComments )
        console.log( "dbComments is:", dbComments );

      } )
      .catch( function ( err ) {

        res.json( err );
      } );

  } )

  //testing dashboard routes
  app.get( "/dashboard", isAuthenticated, function ( req, res ) {
    res.sendFile( path.join( __dirname, "../views/dashboard.html" ) );
    console.log( "dashboard file served" );
    // console.log( "res is:", res );
  } );







  // POST route for saving a new volunteer
  // router.post( "/sign-up/volunteer", isAuthenticated, function ( req, res ) {
  //   console.log( "create happened" );
  //
  //   db.Volunteer.create( {
  //         volunteer_first_name: req.body.volunteer_first_name,
  //         volunteer_last_name: req.body.volunteer_last_name,
  //         phone_number: req.body.phone_number,
  //         email_address: req.body.email_address,
  //         physical_address: req.body.physical_address,
  //         vehicle: req.body.vehicle,
  //       } //end Volunteer.create
  //       // , {
  //       //   include:[{
  //       //     association: buses.BusId
  //       //   }]
  //       // }
  //     ).then( function ( dbFam ) {
  //       res.json( dbFam );
  //       console.log( ".then happened" );
  //     } )
  //     .catch( function ( err ) {
  //       // Whenever a validation or flag fails, an error is thrown
  //       // We can "catch" the error to prevent it from being "thrown", which could crash our node router
  //       res.json( err );
  //     } );
  // } );

};