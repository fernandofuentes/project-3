const express = require( "express" );
const router = express.Router();
const path = require( "path" );
var isAuthenticated = require( "../config/middleware/isAuthenticated" );
const Sequelize = require( "sequelize" )
const Op = Sequelize.Op

const key = require( "./key.js" );


//twilio setup
var accountSid = key.accountSid; // Your Account SID from www.twilio.com/console
var authToken = key.authToken; // Your Auth Token from www.twilio.com/console

var twilio = require( 'twilio' );
var client = new twilio( accountSid, authToken );
var shelterNumbers;
//end twilio setup

var id;

//import models
var db = require( "../models" );

//import routes

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
          volunteer_first_name: {
          [ Op.like ]: 'foo%'
          }
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
          business_name: {
      [ Op.like ]: '%' + req.params.query + '%'
          }
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
          recipient_name: {
      [ Op.like ]: '%' + req.params.query + '%'
          }
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
      include: [ { all: true } ],
      order: [
            [ 'id', 'DESC' ]
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

router.get( "/dashboard/shelters", function ( req, res ) {
  db.Destination.findAll().then( function ( shelters ) {
      res.json( shelters );
      // console.log( 'shelters are:', shelters );
    } )
    .catch( function ( err ) {
      res.json( err )
    } )
} )



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
        volunteer_first_name: {
      [ Op.like ]: '%' + req.params.query + '%'
        }
      }
    } ).then( function ( dbFam ) {
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

    db.Destination.findAll().then( function ( shelterNumbers ) {
        console.log( 'volnumz are:', shelterNumbers );


        // var numbers = shelterNumbers[ 0 ].phone_number );

        var numbers = shelterNumbers.map( function ( e ) {
          return e.phone_number
        } )


        //need to loop thru shelterNumbers array and create messages for each shelter so they know a donation was made
        //start twilio message
        client.messages.create( {
            body: `${dbFam.donor_business_name} posted a new donation of ${dbFam.food_item}`,
            to: numbers, // Text this number
            from: '+12569739723' // From a valid Twilio number
          } )
          .then( ( message ) => console.log( message.sid ) );
        //end twilio message

      } )
      .catch( function ( err ) {

        res.json( err );
      } );

  } )

} ) //end dashboard post

router.delete( "/dashboard/delete", isAuthenticated, function ( req, res ) {
  db.User.destroy( {
    where: {
      id: req.user.id
    }
  } ).then( function ( dbFam ) {
    req.method = 'GET'
    res.redirect( "/" );
    res.sendStatus( 200 );
  } )
} )




module.exports = router;