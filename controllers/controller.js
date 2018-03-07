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



//get route for loading volunteer data into profile
router.get( "/profiles/volunteer", function ( req, res ) {
  console.log( "profile route hit" );

  db.Volunteer.findByID( {
        where: {
          id: "1"
        }
      } //end Volunteer.findByID
      // , {
      //   include:[{
      //     association: buses.BusId
      //   }]
      // }
    ).then( function ( dbFam ) {
      res.json( dbFam );
      console.log( ".then volunteer profile load happened" );
    } )
    .catch( function ( err ) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json( err );
    } );
} ); //end profiles/volunteer

module.exports = router;