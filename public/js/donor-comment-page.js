$( document ).ready( function () {

  var query;
  var comment;
  var reviewer;
  var reviewee;
  var id;

  $( "#donor-comment-search-submit" ).on( "click", function ( event ) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    $( "#query-display" ).empty();


    query = $( "#donor-search-for-comment" ).val().trim();
    console.log( query );
    $( "#donor-search-for-comment" ).val( '' );



    // Send the post request.
    $.get( "/donorquery/" + query, function ( res ) {
      if ( res ) {
        console.log( "db response for donor query is:", res );

        var queriedName = $(
          "<div class='card' id='donor-card' data-id='" + res.UserId + "'" + "style='width: 400px;'>" + "<div><img class='card-img-top' style='width: 150px' src='img/dummy.png' alt='profile pic'>" + "</img></div>" + "<div class='card-body'>" + "<h5 class='card-title'>" + res.UserId + " " + res.business_name + " " + "</h5>" + "<textarea class='comment-input' id='donor-comment-input' placeholder='Enter Comment Here'></textarea>" + "<input type='text' class='commenter-name-input' id='donor-commenter-name-input' placeholder='Enter Your Name Here Here'></input>" + "<button type='button' class='btn btn-primary' id='donor-comment-submit'>Submit</button>"
        )

        $( "#query-display" ).append( queriedName );

      } else {
        console.log( "error" );
      }

    } )

  } );



  $( "#query-display" ).on( "click", "#donor-comment-submit", function ( event ) {
    event.preventDefault();

    comment = $( "#donor-comment-input" ).val().trim();
    reviewer = $( "#donor-commenter-name-input" ).val().trim();
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

    $( "#donor-comment-input" ).val( '' );
    $( "#donor-commenter-name-input" ).val( '' );

    //i think i need to bind the comment to the query id?

    $.post( "/comments", commentObj, function ( res ) {
      if ( res ) {
        console.log( "db response for comment post is:", res );
        $( ".modal" ).modal( 'show' );
        $( "#modal-body-text" ).text( 'Thanks for the feedback!' );

        $( "#query-display" ).empty();

      } else {
        console.log( "error" );
      }

    } )

  } )

} ); //end doc ready fx