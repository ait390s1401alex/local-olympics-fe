import React from 'react';

class NotFound extends React.Component {

  render() {
    return (
      <div>
        <div className="card bg-warning">
          <div className="card-header">
            <h3 className="card-title">404</h3>
          </div>
          <div className="card-body">
            Page Not Found
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound;
