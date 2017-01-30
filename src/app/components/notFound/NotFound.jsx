import React from 'react';

class NotFound extends React.Component {

  render() {
    return (
      <div>
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h3 className="panel-title">404</h3>
          </div>
          <div className="panel-body">
            Page Not Found
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound;
