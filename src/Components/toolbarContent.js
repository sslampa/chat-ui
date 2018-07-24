import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './toolbarContent.css';

class ToolbarContent extends Component {
  showExtra = (text) => {
    return (
      <span>
        {text}  
        <span className="right-align"><FontAwesomeIcon icon='angle-right' /></span>
      </span>
    );
  }

  render() {
    return (
      <div>
        <div className={"toolbar-content-"+this.props.toolbarOpen}>
          <span className="icon-border">
            <FontAwesomeIcon icon={['far', 'calendar']} />
          </span> 
          {this.props.toolbarOpen === 'off' ? '' : this.showExtra(' Calendar ')}
        </div>

        <div className={"toolbar-content-"+this.props.toolbarOpen}>
          <span className="icon-border">
            <FontAwesomeIcon icon="video" />
          </span>
          {this.props.toolbarOpen === 'off' ? '' : this.showExtra(' Virtual Visits ')}
        </div>

        <div className={"toolbar-content-"+this.props.toolbarOpen}>
          <span className="icon-border">
            <FontAwesomeIcon icon="comments" />
          </span>
          {this.props.toolbarOpen === 'off' ? '' : this.showExtra(' Messenger ')}
        </div>

        <div className={"toolbar-content-"+this.props.toolbarOpen}>
          <span className="icon-border">
            <FontAwesomeIcon icon="list-ul" />
          </span>
          {this.props.toolbarOpen === 'off' ? '' : this.showExtra(' Reminders ')}
        </div>

        <div className={"toolbar-content-"+this.props.toolbarOpen}>
          <span className="icon-border">
            <FontAwesomeIcon icon={['far', 'sticky-note']} />
          </span>
          {this.props.toolbarOpen === 'off' ? '' : this.showExtra(' Notes ')}
        </div>
      </div>
    );
  }
}

export default ToolbarContent;