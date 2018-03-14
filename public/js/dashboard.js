$( document ).ready( function () {
  var food_item;
  var quantity;
  var donor_business_name;

  var q;


  $( "#donate" ).on( "click", function ( event ) {
    event.preventDefault();

    // q = "donate"

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

  } ) //end submit donation on click

  $( "#get" ).on( "click", function ( event ) {
    event.preventDefault();

    $.get( "/dashboard/get", function ( res ) {
      if ( res ) {
        console.log( "db response for donation query was:", res );

        for ( var i = 0; i < res.length; i++ ) {
          // var donashunz = $(
          //   "<table id='donation-table'><tr><th>ID</th><th>Food</th><th>Quantity</th><th>Donor</th><th>Location</th></tr>" + "<tr><td>" + res[ i ].id + "</td><td>" + res[ i ].food_item + "</td><td>" + res[ i ].quantity + "</td><td>" + res[ i ].donor_business_name + "</td><td>" + "address dummy" + "</td></tr></table>"
          // )

          var donashunz = $(
            "<div class='row table-headers'><div class='col-md-1 head-cells'>ID</div><div class='col-md-3 head-cells'>Food</div><div class='col-md-1 head-cells'>Quantity</div><div class='col-md-3 head-cells'>Donor</div><div class='col-md-4 head-cells'>Address</div></div>" + "<div class='row'><div class='col-md-1 data-cell'>" + res[ i ].id + "</div><div class='col-md-3 data-cell'>" + res[ i ].food_item + "</div><div class='col-md-1 data-cell'>" + res[ i ].quantity + "</div><div class='col-md-3 data-cell'>" + res[ i ].donor_business_name + "</div><div class='col-md-4 data-cell'>" + 'dummy address' + "</div>"
          )

          $( "#dashboard" ).append( donashunz );
        }

      } else {
        console.log( "error" );
      }

    } )

  } ) //end on click #get button


} ); //end doc . ready fx