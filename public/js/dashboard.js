$( document ).ready( function () {
  var food_item;
  var quantity;
  var donor_business_name;
  var shelters;

  $( "#donate" ).on( "click", function ( event ) {
    event.preventDefault();

    $.get( "/dashboard/donate", function ( res ) {
      if ( res ) {
        console.log( "db response for donor query is:", res );
        console.log( 'dashboard/donate route hit on front end' )

        console.log( res[ 0 ].business_name );

        for ( var i = 0; i < res.length; i++ ) {
          var allDonors = $( "<option>" + res[ i ].business_name + "</option>" )
          $( "#donor_business_name" ).append( allDonors );
        }
      } else {
        console.log( "error" );
      }
    } ) //end dashboard/get

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

  } ) //end submit donation on click

  $( "#get" ).on( "click", function ( event ) {
    event.preventDefault();

    // $.get( "dashboard/shelters", function ( res ) {
    //   if ( res ) {
    //     console.log( "dashboard/shelters res is:", res );
    //     for ( var i = 0; i < res.length; i++ ) {
    //
    //
    //     }
    //   } else {
    //     console.log( "error" )
    //   }
    // } )

    $.get( "/dashboard/get", function ( res ) {
      if ( res ) {
        // console.log( "db response for donation query was:", res );

        for ( var i = 0; i < res.length; i++ ) {

          //this is to format the createdAt datetimes out of js time
          var dates = moment( res[ i ].createdAt ).format( "dddd, MMMM Do YYYY, h:mm a" );

          var donashunz = $(
            "<div class='row table-headers'><div class='col-md-1 head-cells'>ID</div><div class='col-md-2 head-cells'>Date</div><div class='col-md-2 head-cells'>Food</div><div class='col-md-1 head-cells'>Quantity</div><div class='col-md-2 head-cells'>Donor</div><div class='col-md-2 head-cells'>Address</div><div class='col-md-2 head-cells'>Claim</div></div>" + "<div class='row' id='" + res[ i ].id + "'><div class='col-md-1 data-cell'>" + res[ i ].id + "</div><div class='col-md-2 data-cell'>" + dates + "</div><div class='col-md-2 data-cell'>" + res[ i ].food_item + "</div><div class='col-md-1 data-cell'>" + res[ i ].quantity + "</div><div class='col-md-2 data-cell'>" + res[ i ].donor_business_name + "</div><div class='col-md-2 data-cell'>1234 Main St.</div><div class='col-md-2 data-cell'><select class='form-control'><option></option><option>" + res[ i ].recipient_name + "</option><select></div></div>"
          )

          $( "#dashboard" ).append( donashunz );
        }

        $( "#dashboard" ).append(
          "<div class='row'><div class='col-md-9'></div><div class='col-md-3'><button type='button' class='btn btn-primary claim-btn' id='claim-donation'>Claim Selected Donation(s)</button></div></div>"
        );
         

      } else {
        console.log( "error" );
      }

    } ) //end dashboard/get

  } ) //end on click #get button

  // this on click is for claiming a donation for your shelter
  $( "#dashboard" ).on( "click", ".claim-btn", function () {
    console.log( 'claim btn clicked' );
  } ) //end on click for claim button

  $( document ).on("click", "#delete", function(event) {
    $.ajax({
      url: '/dashboard/delete',
      type: 'DELETE',
      success: function(res) {
        console.log(res);
      }
    })
    console.log("here");
})
} ); //end doc . ready fx