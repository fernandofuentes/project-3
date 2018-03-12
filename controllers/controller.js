const express = require( "express" );
const router = express.Router();

var id;

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

// POST route for saving a new donor
router.post( "/sign-up/donor", function ( req, res ) {
  console.log( "create Donor happened" );

  db.Donor.create( {
        business_name: req.body.business_name,
        business_type: req.body.business_type,
        phone_number: req.body.phone_number,
        email_address: req.body.email_address,
        physical_address: req.body.physical_address,
        manager_name: req.body.manager_name,
        manager_phone_number: req.body.manager_phone_number
      } //end Donor.create

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

//get route for loading searchvolunteer data into for comment purposes
router.get( "/query/:query", function ( req, res ) {

  db.Donor.findOne( {
        where: {
          business_name: req.params.query
        }
      } //end Donor.findOne
      // , {
      //   include:[{
      //     association: buses.BusId
      //   }]
      // }
    ).then( function ( dbFam ) {
      res.json( dbFam );
      console.log( 'res:', res );


    } )
    .catch( function ( err ) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json( err );
    } );


} ); //end profiles/donor



// POST route for saving a new comment
router.post( "/comments", function ( req, res ) {
  console.log( "create comment route hit" );
  console.log( "req.body is:", req.body );

  // var id = $( this ).attr( "data-id" );
  // console.log( id );


  db.Comment.create( {
        reviewee: req.body.reviewee,
        reviewer: req.body.reviewer,
        comment: req.body.comment,
        volunteerId: id



      } //end create comment
      // , {
      //   include:[{
      //     association: buses.BusId
      //   }]
      // }
    ).then( function ( dbFam ) {
      res.json( dbFam );
      console.log( "comment .then happened" );
    } )
    .catch( function ( err ) {

      res.json( err );
    } );
} );




// POST route for saving a new Recipient
router.post( "/sign-up/recipient", function ( req, res ) {
  console.log( "create happened" );

  db.Destination.create( {
        recipient_name: req.body.recipient_name,
        phone_number: req.body.phone_number,
        email_address: req.body.email_address,
        physical_address: req.body.physical_address
      }

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

//get route for loading searchvolunteer data into for comment purposes
router.get( "/query/:query", function ( req, res ) {

  db.Volunteer.findOne( {
        where: {
          volunteer_first_name: req.params.query
        }
      } //end Volunteer.findOne
      // , {
      //   include:[{
      //     association: buses.BusId
      //   }]
      // }
    ).then( function ( dbFam ) {
      res.json( dbFam );
      console.log( 'res:', res );


    } )
    .catch( function ( err ) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json( err );
    } );


} ); //end profiles/volunteer



// POST route for saving a new comment
router.post( "/comments", function ( req, res ) {
  console.log( "create comment route hit" );
  console.log( "req.body is:", req.body );

  // var id = $( this ).attr( "data-id" );
  // console.log( id );


  db.Comment.create( {
        reviewee: req.body.reviewee,
        reviewer: req.body.reviewer,
        comment: req.body.comment,
        volunteerId: id



      } //end create comment
      // , {
      //   include:[{
      //     association: buses.BusId
      //   }]
      // }
    ).then( function ( dbFam ) {
      res.json( dbFam );
      console.log( "comment .then happened" );
    } )
    .catch( function ( err ) {

      res.json( err );
    } );
} );



module.exports = router;