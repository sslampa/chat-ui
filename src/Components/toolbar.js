import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ToolbarContent from './toolbarContent.js';
import './toolbar.css';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClass: "off"
    }

    this.toggleToolbar = this.toggleToolbar.bind(this);
  }

  toggleToolbar() {
    this.setState({toggleClass: (this.state.toggleClass === "off") ? "on" : "off"});
  }

  render() {
    return (
      <div className={"toolbar-container toolbar-toggle-"+this.state.toggleClass}>
        <ToolbarContent toolbarOpen={this.state.toggleClass}/>
        {
          (this.state.toggleClass === "off") ? 
          <div className="toolbar-toggle" onClick={this.toggleToolbar}><span><FontAwesomeIcon icon="angle-double-left" /></span></div> :
          <div className="toolbar-toggle" onClick={this.toggleToolbar}><span>Close <FontAwesomeIcon icon="angle-double-right" /></span></div>
        }
      </div>
    ); 
  }
}

export default Toolbar;