import React, { Component } from 'react';

import './App.css';
import Button from "./Button";
import Card from "./Card";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Button caption="Click Me!"/>
        <Button caption="No Click Me!" kind="secondary"/>

        <Card title="Sample Card">
          <div>This is some <strong>sample text</strong></div>
          <div>
            <Button caption="Button in Card" />
          </div>
        </Card>
      </div>
    );
  }
}

export default App;
