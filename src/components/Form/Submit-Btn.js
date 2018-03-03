import React, {Component} from "react";

// const SubmitStyle = {
//   border: '2px solid black'
// };

class SubmitBtn extends React.Component {
  constructor(props) {
        super(props);
        // this.state = { count: 0 };
    }

    render() {
      return (
        <div>
          <button type="button" class="btn btn-primary">Submit</button>
        </div>
    )
    }
  }

//handle functioning



export default SubmitBtn;
