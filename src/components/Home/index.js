import React from 'react';
import { connect } from 'react-redux';

import { withAuthorization } from '../Session';


function HomePage (props) {

    console.log(props);
    return (
        <div>
            <h1>Home Page</h1>
            <p>The Home Page is accessable by every signed in user.</p>
        </div>
    )
}
    
const condition = authUser => !!authUser;

export default connect()(withAuthorization(condition)(HomePage));