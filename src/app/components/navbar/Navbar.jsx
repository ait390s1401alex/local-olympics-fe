import React from 'react';
import { Link, IndexLink } from 'react-router';

import Signin from '../signin/Signin.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var _this = this;
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <IndexLink to="/" className="navbar-brand">Home</IndexLink>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/profile">Profile</Link></li>
            </ul>
            <div className="collapse navbar-collapse">
              <div className="nav navbar-nav navbar-right">
                <div>
                  <Signin
                    loggedInUser = {this.props.loggedInUser}
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

Navbar.contextTypes = {
  loggedInUser: React.PropTypes.object
};

export default Navbar;
