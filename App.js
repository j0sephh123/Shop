import React, { Component } from 'react';
import Nav from './nav/nav';
import Routes from './Routes/Routes';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
