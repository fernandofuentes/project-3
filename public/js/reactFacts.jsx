import React from 'react';

// Component lets me split the UI into reusable pieces.  Can be defined as JS function
export default class MemberClassFacts extends Component {
    render() {
        return (
            <div className="fact">
                {this.props.fact}
            </div>
        );
    }
};

