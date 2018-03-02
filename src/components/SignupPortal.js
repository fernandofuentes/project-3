import React from "react";

const SignupPortal = () => (
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <label>Volunteer to deliver food</label><br />
        <a href="/sign-up/volunteer"><button type="button" class="btn btn-primary">Sign Up</button></a>
      </div>

      <div class="col-md-4">
        <label>I want to donate food from my business</label><br />
        <a href="/sign-up/donor"><button type="button" class="btn btn-primary">Sign Up</button></a>
      </div>
      <div class="col-md-4">
        <label>I would like food</label><br />
        <a href="/sign-up/recipient"><button type="button" class="btn btn-primary">Sign Up</button></a>
      </div>
    </div>
  </div>

);

export default SignupPortal;
