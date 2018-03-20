import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';


const path = require( "path" );
const router = require( "express" ).Router();
const apiRoutes = require( "./api" );


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// API Routes
router.use( "/api", apiRoutes );

// If no API routes are hit, send the React app
router.use( function ( req, res ) {
  res.sendFile( path.join( __dirname, "../client/build/index.html" ) );
} );

module.exports = router;