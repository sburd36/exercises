import React, { Component } from 'react';

import firebase from "firebase/app";
import "firebase/auth";

class App extends Component {
    constructor(props) {
        super(props);
        
        //initialize this component's state
        //with hard-coded email, password,
        //and displayName values--normally you'd
        //set this based on what the user typed into
        //form inputs, but for this demo we will
        //just hard-code them.
        this.state = {
            currentUser: undefined,
            email: "test1@test.com",
            password: "jk25hjk4jkvcx2%;",
            displayName: "Tester"
        }
    }
    /**
     * Called by React when this component
     * is first "mounted" into the DOM, 
     * meaning that it was rendered for the
     * first time.
     */
    componentDidMount() {
        //TODO: listen for Firebase authentication
        //state changes and set the `currentUser`
        //state property
        this.authUnlisten = firebase.auth().onAuthStateChanged(user => this.setState({currentUser: user}));
    }
    /**
     * Called by react when this component is
     * about to be "unmounted," meaning that
     * React is about to remove it's rendered
     * content from the DOM.
     */
    componentWillUnmount() {
        //TODO: stop listening for Firebase
        //authentication state changes so that
        //we don't call this.setState() while
        //unmounted.
        this.authUnlisten();
    }
    handleSignUp() {
        //TODO: create a new Firebase user account
        //using the email, password, and displayName
        //state values
        this.setState({working: true});
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => user.updateProfile({
                displayName: this.state.displayName
            }))
            .catch(err => this.setState({fberror: err}))
            .then(() => this.setState({working: false}));

    }
    handleSignIn() {
        //TODO: sign in using the email and password
        //state values
        this.setState({working: true});
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(err => this.setState({fberror: err}))
            .then(() => this.setState({working: false}));
    }
    handleSignOut() {
        //TODO: sign out
        firebase.auth().signOut();
    }
    render() {
        return (
            <div className="container">
                <h1>Firebase Authentication</h1>
                {
                    this.state.fberror ?
                        <div className="alert alert-danger">
                            {this.state.fberror.message}
                        </div> :
                        undefined
                }                
                <p>
                    <button className="btn btn-info mr-2"
                        disabled={this.state.working}
                        onClick={() => this.handleSignUp()}>
                        Sign Up
                    </button>
                    <button className="btn btn-success mr-2"
                        disabled={this.state.working}
                        onClick={() => this.handleSignIn()}>
                        Sign In
                    </button>
                    <button className="btn btn-danger"
                        disabled={this.state.working}
                        onClick={() => this.handleSignOut()}>
                        Sign Out
                    </button>
                </p>
                <p>
                    {
                        this.state.currentUser ? 
                        this.state.currentUser.displayName : 
                        "(not signed in)"
                    }
                </p>
            </div>
        );
    }
}

export default App;