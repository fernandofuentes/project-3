$( document ).ready( function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get( "/api/user_data" ).then( function ( data ) {
    $( ".member-name" ).text( data.email );
  } );


  $.get( "/members/recentcomments", function ( res ) {
    if ( res ) {
      console.log( 'reviewee 1 comments are:', res );

      for ( var i = 0; i < res.length; i++ ) {

        var myComments = $(
          "<li>" + res[ i ].comment + "</li>"
        )
        $( "#user-recent-comments" ).append( myComments );

      }

      console.log( "myComments are:", myComments );



    } else {
      console.log( 'error loading users recent comments' );
    }
  } )






} );