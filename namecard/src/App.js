import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
            <p>{this.props.children}</p>
        
      </div>
    );
  }
}

export default App;
