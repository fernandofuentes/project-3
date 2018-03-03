var volAddress;

$( document ).ready( function () {
 
 
 $( ".add-volunteer-form" ).on( "submit", function ( event ) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log( "submit clicked" );

    volAddress = `${$("#input-address").val().trim()} ${$("#input-address-2").val().trim()} ${$("#input-city").val().trim()} ${$("#input-state").val().trim()} ${$("#input-zip").val().trim()}`;

    // console.log( volAddress );

    newVol = {
      volunteer_first_name: $( "#input-first-name" ).val().trim(),
      volunteer_last_name: $( "#input-last-name" ).val().trim(),
      phone_number: $( "#input-vol-phone" ).val().trim(),
      email_address: $( "#input-email-vol" ).val().trim(),
      physical_address: volAddress,
      vehicle: $( "#input-vehicle-vol" ).val().trim(),
    };

    //console.log(studentAddress);
    console.log( "newVol is:", newVol );


    // Send the POST request.
    $.post( "/sign-up/volunteer", newVol, function ( res ) {
      if ( res ) {
        console.log( res );

      } else {
        console.log( "error" );
      }

      //empty form after submission
      $( "#input-first-name" ).val( '' );
      $( "#input-last-name" ).val( '' );
      $( "#input-vol-phone" ).val( '' );
      $( "#input-email-vol" ).val( '' );
      $( "#input-vehicle-vol" ).val( '' );
      $( "#input-address" ).val( '' );
      $( "#input-address-2" ).val( '' );
      $( "#input-city" ).val( '' );
      $( "#input-state" ).val( '' );
      $( "#input-zip" ).val( '' );



      $( ".modal" ).modal( 'show' );
      $( "#modal-body-text" ).text( 'Welcome to the team, ' + newVol.volunteer_first_name + '!' );

      // the below reload is commented out because it was breaking the modal
      //
      // Reload the page to get the updated list
      // location.reload();
    } );
  } ); //end submit event

})