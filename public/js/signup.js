$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
  // This is now unnecessary because input is validated on the client
    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    }).then(function(data) {
      if (data.errors) {
         // If there's an error, handle it by throwing up a boostrap alert
        handleLoginErr(data.errors[0]);
        return console.error('Save failed:', data.errors[0].message);
      }
      window.location.replace(data);
     
    });
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.message);
    $("#alert").fadeIn(500);
  }
});