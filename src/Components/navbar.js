import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a>Patients</a></li>
          <li><a>Clinicians</a></li>
          <li><a>Protocols</a></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
