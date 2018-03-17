$( document ).ready( function () {
  var food_item;
  var quantity;
  var donor_business_name;
  var shelters;
  var donorID;
  var markers = [];

  $( "#donate" ).on( "click", function ( event ) {
    event.preventDefault();

    $( "#dashboard" ).empty()

    $.get( "/dashboard/donate", function ( res ) {
      if ( res ) {
        console.log( "db response for donor query is:", res );
        console.log( 'dashboard/donate route hit on front end' )


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
      donor_business_name: donor_business_name,
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
    $( "#dashboard" ).empty()

    $.get( "/dashboard/get", function ( res ) {
      if ( res ) {
        console.log( "db response for donation query was:", res );
        for ( var i = 0; i < res.length; i++ ) {

          markers.push( res[ i ].Donor.physical_address );

        }

        console.log( '1markers are;', markers );

        for ( var i = 0; i < res.length; i++ ) {

          //this is to format the createdAt datetimes out of js time
          var dates = moment( res[ i ].createdAt ).format( "dddd, MMMM Do YYYY, h:mm a" );

          var donashunz = $(
            "<div class='row table-headers'><div class='col-md-1 head-cells'>ID</div><div class='col-md-2 head-cells'>Date</div><div class='col-md-2 head-cells'>Food</div><div class='col-md-1 head-cells'>Quantity</div><div class='col-md-2 head-cells'>Donor</div><div class='col-md-2 head-cells'>Address</div><div class='col-md-2 head-cells'>Claim</div></div>" + "<div class='row' id='" + res[ i ].id + "'><div class='col-md-1 data-cell'>" + res[ i ].id + "</div><div class='col-md-2 data-cell'>" + dates + "</div><div class='col-md-2 data-cell'>" + res[ i ].food_item + "</div><div class='col-md-1 data-cell'>" + res[ i ].quantity + "</div><div class='col-md-2 data-cell'>" + res[ i ].donor_business_name + "</div><div class='col-md-2 data-cell'>" + "<div class='col-md-2 data-cell'>" + res[ i ].Donor.physical_address + "</div>" + "</div><div class='col-md-2 data-cell'><select class='form-control'><option></option><option>" + res[ i ].recipient_name + "</option><select></div></div>"
          )

          $( "#dashboard" ).append( donashunz );

        }

        $( "#dashboard" ).append(
          "<div class='row'><div class='col-md-9'></div><div class='col-md-3'><button type='button' class='btn btn-primary claim-btn' id='claim-donation'>Claim Selected Donation(s)</button></div></div>"
        );


        $( "#map-title" ).prepend( 'Available Donations in ' );

        //map code//
        console.log( "maps code loaded on dashboard!" );

        function initMap() {
          var geocoder = new google.maps.Geocoder();

          for ( var i = 0; i < markers.length; i++ ) {
            geocoder.geocode( { 'address': markers[ i ] }, function ( results, status ) {
              if ( status == google.maps.GeocoderStatus.OK ) {
                var marker = new google.maps.Marker( {
                  map: map,
                  position: results[ 0 ].geometry.location
                } );
              } else {
                alert( "Geocode was not successful for the following reason: " + status );
              }
            } );
          }

          var center = { lat: 29.760202, lng: -95.369835 };
          var houston = { lat: 29.760202, lng: -95.369835 };

          var map = new google.maps.Map( document.getElementById( 'map' ), {
            zoom: 10,
            center: center
          } );

        } //end init map fx

        initMap();

      } else {
        console.log( "error" );
      }

    } ) //end dashboard/get

  } ) //end on click #get button

  //on click for pickup button
  $( "#pickup" ).on( 'click', function ( event ) {
    event.preventDefault();
    $( "#dashboard" ).empty()

    //this should then display all donations that have been claimed by shelters.
    //display should also be a map of Available donations.
    //display should be a table with checkbox for volunteer to claim they're picking the donation up
    // in the talbe should be donation with id, donor, donor address, and shelter claiming it with id and address?
    //check row, then Submit
    //post happens which creates new row in 'pick_up' table.
    //google map populates with address, or addresses of pick_up table where vol id matches user.id

  } )

  // this on click is for claiming a donation for your shelter
  $( "#dashboard" ).on( "click", ".claim-btn", function () {
    console.log( 'claim btn clicked' );
  } ) //end on click for claim button


} ); //end doc . ready fx