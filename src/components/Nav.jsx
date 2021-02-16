import logo from '../logo.svg';
import React from 'react';
import './Nav.css';

// <p>
//   Edit <code>src/App.js</code> and save to reload. Felipe Munevar
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>

export class Nav extends React.Component {
  render(){
    return (
      <div class="navbar">
        Weather
        About
        Search
      </div>
    )
  }
}
