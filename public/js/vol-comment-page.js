$( document ).ready( function () {

  var query;
  var comment;
  var reviewer;
  var reviewee;
  var id;

  $( "#vol-comment-search-submit" ).on( "click", function ( event ) {
    event.preventDefault();

    query = $( "#vol-search-for-comment" ).val().trim();
    // console.log( query );
    $( "#vol-search-for-comment" ).val( '' );



    // Send the post request.
    $.get( "/query/" + query, function ( res ) {
      if ( res ) {
        console.log( "db response for vol query is:", res );
        id = res.id;

        var queriedName = $(
          "<div class='card' id='vol-card' data-id='" + res.id + "'" + "style='width: 400px;'>" + "<div><img class='card-img-top' style='width: 150px' src='img/dummy.png' alt='profile pic'>" + "</img></div>" + "<div class='card-body'>" + "<h5 class='card-title'>" + id + " " + res.volunteer_first_name + " " + res.volunteer_last_name + "</h5>" + "<textarea class='comment-input' id='vol-comment-input' placeholder='Enter Comment Here'></textarea>" + "<input type class='commenter-name-input' id='vol-commenter-name-input' placeholder='Enter Your Name Here Here'></input>" + "<button type='button' class='btn btn-primary' id='vol-comment-submit'>Submit</button>"
        )

        $( "#query-display" ).append( queriedName );

      } else {
        console.log( "error" );
      }

    } )

  } );



  $( "#query-display" ).on( "click", "#vol-comment-submit", function ( event ) {
    event.preventDefault();


    comment = $( "#vol-comment-input" ).val().trim();
    reviewer = $( "#vol-commenter-name-input" ).val().trim();
    reviewee = $( ".card" ).attr( "data-id" );

    var commentObj = {
      comment: comment,
      reviewer: reviewer,
      reviewee: reviewee
    }

    console.log( "commentObj is:", commentObj );

    //put this stuff in obj and pass to .post
    console.log( comment );
    console.log( "by", reviewer );

    $( "#vol-comment-input" ).val( '' );
    $( "#vol-commenter-name-input" ).val( '' );

    $.post( "/comments", commentObj, function ( res ) {
      if ( res ) {
        // console.log( "db response for comment post is:", res );

        $( ".modal" ).modal( 'show' );
        $( "#modal-body-text" ).text( 'Thanks for the feedback!' );
        $( "#query-display" ).empty();

      } else {
        console.log( "error" );
      }

    } )

  } )


} ); //end doc ready fx