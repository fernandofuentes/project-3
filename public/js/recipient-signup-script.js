var recipientAddress;

$(document).ready(function () {

  $(".add-recipient-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("submit clicked");

    recipientAddress = `${$("#input-recipient-address").val().trim()} ${$("#input-city").val().trim()} ${$("#input-state").val().trim()} ${$("#input-recipient-zip").val().trim()}`;


    newRecipient = {
      recipient_name: $("#input-recipient-name").val().trim(),
      phone_number: $("#input-recipient-phone").val().trim(),
      email_address: $("#input-recipient-email").val().trim(),
      physical_address: recipientAddress,
    };

    //console.log(studentAddress);
    console.log("newRecipient is:", newRecipient);


    // Send the POST request.
    $.post("/sign-up/recipient", newRecipient, function (res) {
      if (res) {
            console.log(res);
          } 
          else {
            console.log("error");
          }

        //empty form after submission
        $("#input-recipient-name").val('');
        $("#input-recipient-phone").val('');
        $("#input-recipient-email").val('');
        $("#input-address").val('');
        $("#input-city").val('');
        $("#input-state").val('');
        $("#input-zip").val('');


      $(".modal").modal('show');
      $("#modal-body-text").text('Welcome to the team, ' + newRecipient.recipient_name + '!');

          // the below reload is commented out because it was breaking the modal
          //
          // Reload the page to get the updated list
          // location.reload();
        });
        
    }); //end submit event
}) //end doc.ready fx

