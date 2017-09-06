import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Switch , Route , NavLink } from 'react-router-dom';
import { Home } from './components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <ul>
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          </ul>
        <div>
          <Route path="/" component={Home} />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
