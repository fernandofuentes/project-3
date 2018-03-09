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

        // var queriedName = "<li>" + res.volunteer_first_name + " " + res.volunteer_last_name + "</li>";

        var queriedName = $(
          "<div class='card' style='width: 400px;'>" + "<img class='card-img-top' style='width: 150px' src='img/dummy.png' alt='profile pic'>" + "</img>" + "<div class='card-body'>" + "<h5 class='card-title'>" + res.volunteer_first_name + " " + res.volunteer_last_name + "</h5>" + "<input type='text' class='comment-input' placeholder='Enter Comment Here'></input>" + "<button type='button' class='btn btn-primary' id='vol-comment-comment-submit'>Submit</button>"
        )

        $( "#query-display" ).append( queriedName );

      } else {
        console.log( "error" );
      }

    } )

  } );



  $( "#vol-comment-comment-submit" ).on( "click", function ( event ) {
      event.preventDefault();

      //post comment


    )
  }

} ); //end doc ready fx