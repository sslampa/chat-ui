import React, { Component } from 'react';
import NavBar from './Components/navbar.js';
import ListView from './Components/listView.js';
import Toolbar from './Components/toolbar.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendar, faStickyNote } from '@fortawesome/free-regular-svg-icons'
import { faAngleDoubleLeft, faAngleDoubleRight, faVideo, faComments, faListUl, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faAngleDoubleLeft, faAngleDoubleRight, faVideo, faComments, faListUl, faAngleRight);
library.add(faCalendar, faStickyNote);


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar /> 
        <ListView />
        <Toolbar />
      </div>
    );
  }
}

export default App;
