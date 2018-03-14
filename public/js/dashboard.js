$( document ).ready( function () {
  var food_item;
  var quantity;
  var donor_business_name;

  var q;


  $( "#donate" ).on( "click", function ( event ) {
    event.preventDefault();

    q = "donate"

    $.get( "/dashboard/" + q, function ( res ) {
      if ( res ) {
        console.log( "db response for donor query is:", res );

        console.log( res[ 0 ].business_name );

        for ( var i = 0; i < res.length; i++ ) {
          var allDonors = $( "<option>" + res[ i ].business_name + "</option>" )
          $( "#donor_business_name" ).append( allDonors );

        }



      } else {
        console.log( "error" );
      }

    } )

    var enterDonation = $(
      "<div class='row'><h5>Please enter your donation's info below</h5></div>" + "<div class='row'><label for='input'>Donor</label>" + "<select class='form-control' id='donor_business_name' placeholder='Donors' aria-label='donor' aria-describedby='basic-addon1'></select></div>" + "<div class='row'><label for='input'>Food</label>" + "<input type='text' class='form-control' id='food_item' placeholder='Food/s' aria-label='food' aria-describedby='basic-addon1'></div>" + "<div class='row'><label for='input'>Quantity</label>" + "<input type='text' class='form-control' id='quantity' placeholder='Quantity' aria-label='quantity' aria-describedby='basic-addon1'></div>" + "<div class='row'><button type='button' class='btn btn-primary' id='submit-donation'>Submit</button></div>"
    );
    $( "#dashboard" ).append( enterDonation );


  } ) //end on click


  $( "#dashboard" ).on( "click", "#submit-donation", function ( event ) {
    event.preventDefault();
    console.log( 'submit donation clicked' );

    food_item = $( "#food_item" ).val().trim();
    quantity = $( "#quantity" ).val().trim();
    donor_business_name = $( "#donor_business_name" ).val().trim();

    var donationObj = {
      food_item: food_item,
      quantity: quantity,
      donor_business_name: donor_business_name
    }

    console.log( "don obj:", donationObj );

    $( "#food_item" ).val( '' );
    $( "#quantity" ).val( '' );
    $( "#donor_business_name" ).val( '' );


    $.post( "/dashboard", donationObj, function ( res ) {

      if ( res ) {
        console.log( "db response for donation post is:", res );

        $( ".modal" ).modal( 'show' );
        $( "#modal-body-text" ).text( "Thanks for the " + food_item + ", " + donor_business_name + "!" );

        $( "#dashboard" ).empty();

      } else {
        console.log( "error" );
      }

    } )

  } )


} ); //end doc . ready fx