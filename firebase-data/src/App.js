import React, { Component } from 'react';

//import firebase application, auth, and database modules
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//our own components
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import PurgeButton from "./PurgeButton";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: undefined, //the current firebase user
            tasksRef: undefined     //firebase database ref for that user
        }

        //for this demo, we will just sign-in 
        //anonymously, which creates a new user account
        //but doesn't capture any info about that user
        firebase.auth().signInAnonymously();
    }
    componentDidMount() {
        //TODO: listen for authentication state changes
        //and update our state based on the current user

    }
    componentWillUnmount() {
        //TODO: stop listening for authentication state changes
        
    }
    render() {
        //TODO: pass the firebase reference to our components
        //as properties
        return (
            <div className="App">
                <header className="jumbotron jumbotron-fluid bg-primary text-white">
                    <div className="container">
                        <h1>My Task List</h1>
                    </div>
                </header>
                <main>
                    <div className="container">
                        <NewTaskForm  />
                        <div className="mt-2"></div>
                        <TaskList  />
                        <div className="mt-2">
                            <PurgeButton  />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
