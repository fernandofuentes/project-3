const express = require( "express" );
const router = express.Router();
const path = require( "path" );
var isAuthenticated = require( "../config/middleware/isAuthenticated" );


var id;

//import models
var db = require( "../models" );


// // POST route for saving a new volunteer
router.post( "/sign-up/volunteer", isAuthenticated, function ( req, res ) {
  // console.log( "create happened" );
  // console.log( req.user.id );

  db.Volunteer.create( {
        volunteer_first_name: req.body.volunteer_first_name,
        volunteer_last_name: req.body.volunteer_last_name,
        phone_number: req.body.phone_number,
        email_address: req.body.email_address,
        physical_address: req.body.physical_address,
        vehicle: req.body.vehicle,
        UserId: req.user.id
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
router.get( "/members/profiles", function ( req, res ) {

  db.Volunteer.findOne( {
        where: {
          volunteer_first_name: "Brandon"
        }
      }
      //end Volunteer.findByID
      // , {
      //   include:[{
      //     association: buses.BusId
      //   }]
      // }
    ).then( function ( dbFam ) {
      // res.sendFile( path.join( __dirname, "../views/profiles/volunteer-profile.html" ) );
      // res.sendFile( path.join( __dirname, "../views/profiles/volunteer-profile.html" ) );
      res.json( dbFam )
      // console.log( ".then volunteer profile load happened" );

      var lastName = dbFam.volunteer_last_name;
      var firstName = dbFam.volunteer_first_name;
      var date = dbFam.createdAt;

      var volDataObj = {
        name: firstName,
        date: date
      }

      // console.log( "volData Object is:", volDataObj );


      // console.log( "res is:", res );
    } )
    .catch( function ( err ) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json( err );
    } );
} ); //end profiles/volunteer

// POST route for saving a new donor
router.post( "/sign-up/donor", isAuthenticated, function ( req, res ) {
  // console.log( "create Donor happened" );

  db.Donor.create( {
        business_name: req.body.business_name,
        business_type: req.body.business_type,
        phone_number: req.body.phone_number,
        email_address: req.body.email_address,
        physical_address: req.body.physical_address,
        manager_name: req.body.manager_name,
        manager_phone_number: req.body.manager_phone_number,
        UserId: req.user.id
      } //end Donor.create

      // , {
      //   include:[{
      //     association: buses.BusId
      //   }]
      // }
    ).then( function ( dbFam ) {
      res.json( dbFam );
      // console.log( ".then happened" );
    } )
    .catch( function ( err ) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json( err );
    } );
} );

//get route for loading searchvolunteer data into for comment purposes
router.get( "/donorquery/:query", function ( req, res ) {

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
      // console.log( 'res:', res );


    } )
    .catch( function ( err ) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json( err );
    } );


} ); //end profiles/donor



// POST route for saving a new comment
router.post( "/comments", isAuthenticated, function ( req, res ) {
  // console.log( "create comment route hit" );

  // var id = $( this ).attr( "data-id" );
  // console.log( id );


  db.Comment.create( {
        reviewee: req.body.reviewee,
        reviewer: req.body.reviewer,
        comment: req.body.comment,
        UserId: req.user.id



      } //end create comment
      // , {
      //   include:[{
      //     association: buses.BusId
      //   }]
      // }
    ).then( function ( dbFam ) {
      // console.log( "req.body.reviewee is:", req.body.reviewee );
      res.json( dbFam );

      // console.log( "comment .then happened" );
    } )
    .catch( function ( err ) {

      res.json( err );
    } );
} );




// POST route for saving a new Recipient
router.post( "/sign-up/recipient", isAuthenticated, function ( req, res ) {
  // console.log( "create shelter happened" );

  db.Destination.create( {
        recipient_name: req.body.recipient_name,
        phone_number: req.body.phone_number,
        email_address: req.body.email_address,
        physical_address: req.body.physical_address,
        UserId: req.user.id
      }

    ).then( function ( dbFam ) {
      res.json( dbFam );
      // console.log( ".then happened" );
    } )
    .catch( function ( err ) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json( err );
    } );
} );

//get route for loading searchrecipient data into for comment purposes
router.get( "/recipientquery/:query", function ( req, res ) {

  db.Destination.findOne( {
        where: {
          recipient_name: req.params.query
        }
      }

    ).then( function ( dbFam ) {
      res.json( dbFam );
      // console.log( 'res:', res );


    } )
    .catch( function ( err ) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json( err );
    } );


} ); //end profiles/recipient



//get route for loading searchvolunteer data into for comment purposes
router.get( "/dashboard/donate", function ( req, res ) {

  db.Donor.findAll( {


      } //end donor.findall
      // , {
      //   include:[{
      //     association: buses.BusId
      //   }]
      // }
    ).then( function ( donorz ) {
      res.json( donorz );
      // console.log( donorz );
      // console.log( 'controller line 238 res:', res );


    } )
    .catch( function ( err ) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json( err );
    } );


} ); //end profiles/volunteer

router.get( "/dashboard/get", function ( req, res ) {
  db.Donation.findAll( {
      include: [
        {
          model: db.Donor,
          // include: [
          //   {
          //     model: db.Destination
          //   }
          // ]
        }
      ]
    } ).then( function ( donations ) {
      res.json( donations );
      console.log( 'donations and donrs are:', donations );

    } )
    .catch( function ( err ) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json( err );
    } )


} )

// router.get( "/dashboard/shelters", function ( req, res ) {
//   db.Destination.findAll().then( function ( shelters ) {
//       res.json( shelters );
//       // console.log( 'shelters are:', shelters );
//     } )
//     .catch( function ( err ) {
//       res.json( err )
//     } )
// } )



// POST route for saving a new comment
router.post( "/comments", function ( req, res ) {
  // console.log( "create comment route hit" );
  // console.log( "req.body is:", req.body );

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
      // console.log( "comment .then happened" );
    } )
    .catch( function ( err ) {

      res.json( err );
    } );
} );

//get route for loading vol data for posting of comments
router.get( "/volunteerquery/:query", function ( req, res ) {

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
      // console.log( 'res:', res );


    } )
    .catch( function ( err ) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json( err );
    } );


} ); //end profiles/volunteer

router.post( "/dashboard", isAuthenticated, function ( req, res ) {
  db.Donation.create( {
      food_item: req.body.food_item,
      quantity: req.body.quantity,
      donor_business_name: req.body.donor_business_name,
      DonorId: req.user.id
    } ).then( function ( dbFam ) {
      res.json( dbFam );
      console.log( "donation .then happened" );
    } )
    .catch( function ( err ) {

      res.json( err );
    } );
} )



module.exports = router;