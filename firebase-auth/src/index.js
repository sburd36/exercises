import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//TODO: import firebase from "firebase/app"
//and initialize your app using the config
//you copied from the Firebase app console
import firebase from "firebase/app";
// Initialize Firebase
var config = {
apiKey: "AIzaSyCbjpy854rAUmlCtAHOKXZfkocRg7WwnuI",
authDomain: "info343-demo-94a53.firebaseapp.com",
databaseURL: "https://info343-demo-94a53.firebaseio.com",
projectId: "info343-demo-94a53",
storageBucket: "info343-demo-94a53.appspot.com",
messagingSenderId: "979524970804"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
