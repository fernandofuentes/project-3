$( document ).ready( function () {

  var query;

  $( "#vol-comment-search-submit" ).on( "click", function ( event ) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    query = $( "#vol-search-for-comment" ).val().trim();
    console.log( query );
    $( "#vol-search-for-comment" ).val( '' );



    // Send the post request.
    $.get( "/query/" + query, function ( res ) {
      if ( res ) {
        console.log( "db response is:", res );

        var name = $( "#query-display" ).html( "<li>" + res.volunteer_first_name + " " + res.volunteer_last_name + "</li>" );


        $( "#query-display" ).append( name );

      } else {
        console.log( "error" );
      }


    } )

  } );

} );