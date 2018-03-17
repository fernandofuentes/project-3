$( document ).ready( function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get( "/api/user_data" ).then( function ( data ) {
    $( ".member-name" ).text( data.email );
  } );

  //comments code keep!!!!!//
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
  //comments code keeeeeep!!!!//


  //delte user from users table//
  $( "#delete" ).on( "click", function ( event ) {
    event.preventDefault();
    console.log( 'delete user button clicked' );

    $.ajax( {
      url: '/dashboard/delete',
      type: 'DELETE',
      success: function ( res ) {
        console.log( res );
      }
    } )
    console.log( "here" );
  } )
  //delete user from users table//

} );