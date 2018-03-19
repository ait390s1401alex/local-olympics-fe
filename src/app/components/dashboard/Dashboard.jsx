import React from 'react';
import DisplayStyle from './display.css';

class Dashboard extends React.Component {

  render() {
    return (
      <div className="card">
        <div className={DisplayStyle.dstyle}>
          <p>MAIN DISPLAY -- placeholder content</p>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Dashboard;
