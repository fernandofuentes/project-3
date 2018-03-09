var donorAddress;

$( document ).ready( function () {
 
 
 $( ".add-donor-form" ).on( "submit", function ( event ) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log( "submit clicked" );

    donorAddress = `${$("#input-physical-address").val().trim()} ${$("#input-city").val().trim()} ${$("#input-state").val().trim()} ${$("#input-zip-code").val().trim()}`;

    // console.log( donorAddress );

    newDonor = {
      business_name: $( "#input-business-name" ).val().trim(),
      business_type: $( "#input-business-type" ).val().trim(),
      phone_number: $( "#input-phone-number" ).val().trim(),
      email_address: $( "#input-email-address" ).val().trim(),
      physical_address: donorAddress,
      manager_name: $( "#input-manager-name" ).val().trim(),
      manager_phone_number: $( "#input-manager-phone-number" ).val().trim(),
    };

    //console.log(studentAddress);
    console.log( "newDonor is:", newDonor );
    console.log("donor addres is:", donorAddress)


    // Send the POST request.
    $.post( "/sign-up/donor", newDonor, function ( res ) {
      if ( res ) {
        console.log( res );

      } else {
        console.log( "error" );
      }

      //empty form after submission
      $( "#input-business-name" ).val( '' );
      $( "#input-business-type" ).val( '' );
      $( "#input-phone-number" ).val( '' );
      $( "#input-email-address" ).val( '' );
      $( "#input-physical-address" ).val( '' );
      $( "#input-city" ).val( '' );
      $( "#input-state" ).val( '' );
      $( "#input-zip-code" ).val( '' );
      $( "#input-manager-name" ).val( '' );
      $( "#input-manager-phone-number" ).val( '' );



      $( ".modal" ).modal( 'show' );
      $( "#modal-body-text" ).text( 'Welcome to the team, ' + newDonor.business_name + '!' );

      // the below reload is commented out because it was breaking the modal
      //
      // Reload the page to get the updated list
      // location.reload();
    } );
  } ); //end submit event

})