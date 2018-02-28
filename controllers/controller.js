const express = require( "express" );
const router = express.Router();

//import models
var db = require( "../models" );



// POST route for saving a new volunteer
router.post( "/sign-up/volunteer", function ( req, res ) {
  console.log( "post" );
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
      console.log( "create .then happened" );
      res.json( dbFam );

    } )
    .catch( function ( err ) {

      res.json( err );
    } );
} );