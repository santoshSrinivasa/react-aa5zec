import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Component1 from "./Component1";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Component1/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
