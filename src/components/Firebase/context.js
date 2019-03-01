import React from 'react';

const FirebaseContext = React.createContext(null);
//Creates FirebaseContext.Provider - Provides a Firebase instance
//Creates FirebaseContext.Consumer - Retrieves the Firebase instance if it is needed in a component

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;