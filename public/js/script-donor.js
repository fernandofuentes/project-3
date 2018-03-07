var donorAddress;

$( document ).ready( function () {
 
 
 $( "#submit-donor-new" ).on( "click", function ( event ) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log( "submit clicked" );


    donorAddress = `${$("#input-address").val().trim()} ${$("#input-city").val().trim()} ${$("#input-state").val().trim()} ${$("#input-zip").val().trim()}`;


     console.log( donorAddress );

    newDonor = {
      business_name: $( "#input-business-name" ).val().trim(),
      business_type: $( "#input-business-type" ).val().trim(),
      phone_number: $( "#input-phone-number" ).val().trim(),
      email_address: $( "#input-email-address" ).val().trim(),
      address: donorAddress,
      city: $( "#input-city" ),
      state: $( "#input-state"),
      zip: $( "#input-zip" ),
    };

    //console.log(studentAddress);
    console.log( "newDonor is:", newDonor );


    // Send the POST request.
    $.post( "/sign-up/donor", newDonor, function ( res ) {
      if ( res ) {
        console.log( res );

      } else {
        console.log( "error" );
      }

      console.log("post");
      //empty form after submission
      $( "#input-business-name" ).val( '' );
      $( "#input-business-type" ).val( '' );
      $( "#input-phone-number" ).val( '' );
      $( "#input-email-address" ).val( '' );
      $( "#input-address" ).val( '' );
      $( "#input-city" ).val( '' );
      $( "#input-state" ).val( '' );
      $( "#input-zip" ).val( '' );



      $( ".modal" ).modal( 'show' );
      $( "#modal-body-text" ).text( 'Welcome to the team, ' + newDonor.business_name + '!' );

      // the below reload is commented out because it was breaking the modal
      //
      // Reload the page to get the updated list
      // location.reload();
    } );
  } ); //end submit event

})