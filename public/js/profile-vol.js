$( document ).ready( function () {





  // Send the POST request.
  $.get( "/members/profiles", function ( res ) {
    if ( res ) {
      console.log( "ajax call happened and res is:", res );

    } else {
      console.log( "error" );
    }







  } );



} ) //end doc.ready fx