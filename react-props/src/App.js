import React, { Component } from 'react';

import './App.css';
import Button from "./Button";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Button caption="Click Me!" kind="primary"/>
        <Button caption="No Click Me!" kind="secondary"/>
      </div>
    );
  }
}

export default App;
