const express = require( "express" );
const router = express.Router();
const chalkAnimation = require( 'chalk-animation' );

//import models
var db = require( "../models" );

//html routes=================================================

//home page
router.get( "/", function ( req, res ) {
  res.sendFile( 'index.html', { root: 'views' } );
} );

//sign-up portal
router.get( "/sign-up", function ( req, res ) {
  res.sendFile( 'signup-portal.html', { root: 'views' } );
} );

//sign-up volunteer
router.get( "/sign-up/volunteer", function ( req, res ) {
  res.sendFile( '/sign-up/sign-up-vol.html', { root: 'views' } );
} );

//sign-up donor
router.get( "/sign-up/donor", function ( req, res ) {
  res.sendFile( '/sign-up/sign-up-donor.html', { root: 'views' } );
} );

//sign-up recipient
router.get( "/sign-up/recipient", function ( req, res ) {
  res.sendFile( '/sign-up/sign-up-recipient.html', { root: 'views' } );
} );






//export router
module.exports = router;