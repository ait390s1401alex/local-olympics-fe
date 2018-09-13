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
        <nav className="navbar navbar-expand-lg navbar-light bg-light my-2">
          <IndexLink to="/" className="navbar-brand">Local Olympics</IndexLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainNavbar" aria-controls="navbarMainNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMainNavbar">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
            </ul>
            <div className="mr-1 ml-auto">
              <Signin
                loggedInUser = {this.props.loggedInUser}
              />
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
