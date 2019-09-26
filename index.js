import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Component1 from "./Component1";
import {UserProvider} from "./context";


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
     
     <UserProvider value="san">
        <Component1/>
     </UserProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
