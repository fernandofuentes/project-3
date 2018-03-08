const express = require( "express" );
const router = express.Router();

//import models
var db = require( "../models" );



// POST route for saving a new volunteer
router.post( "/sign-up/volunteer", function ( req, res ) {
  console.log( "create happened" );

  db.Volunteer.create( {
        volunteer_first_name: req.body.volunteer_first_name,
        volunteer_last_name: req.body.volunteer_last_name,
        phone_number: req.body.phone_number,
        email_address: req.body.email_address,
        physical_address: req.body.physical_address,
        vehicle: req.body.vehicle
      } //end Volunteer.create
      // , {
      //   include:[{
      //     association: buses.BusId
      //   }]
      // }
    ).then( function ( dbFam ) {
      res.json( dbFam );
      console.log( ".then happened" );
    } )
    .catch( function ( err ) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json( err );
    } );
} );

// POST route for saving a new Recipient
router.post("/sign-up/recipient", function (req, res) {
  console.log("create happened");

  db.Destination.create({
    recipient_name: req.body.recipient_name,
    phone_number: req.body.phone_number,
    email_address: req.body.email_address,
    physical_address: req.body.physical_address
  } 

  ).then(function (dbFam) {
    res.json(dbFam);
    console.log(".then happened");
  })
    .catch(function (err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json(err);
    });
});



module.exports = router;