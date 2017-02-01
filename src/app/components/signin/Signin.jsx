
import React from 'react';

import googleApiLoader from '../utils/GoogleApiLoader.jsx';


class Signin extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loggedInUserThumb: ""
    }
  }

  componentDidMount() {
    var _this = this;
  }


  toggleSignIn() {
    if (!googleApiLoader.getAuth2().isSignedIn.get()) {
      googleApiLoader.signIn();
    }
  }

  toggleSignOut() {
    if (googleApiLoader.getAuth2().isSignedIn.get()) {
      googleApiLoader.signOut();
    }
  }

  render () {
    var loggedInUserThumb = "";

    if (this.props.loggedInUser && this.props.loggedInUser.picture) {
      loggedInUserThumb = <img src={this.props.loggedInUser.picture} />
    }

    var toggleLoginButton = <button className="btn btn-default navbar-btn"  onClick={this.toggleSignIn}>Login with Google</button>
    var toggleLogoutButton = <button className="btn btn-default navbar-btn" onClick={this.toggleSignOut}>Sign Out</button>

    if (this.props.loggedInUser && this.props.loggedInUser.isLoggedIn) {

      return <div>
        {loggedInUserThumb}
        {toggleLogoutButton}
      </div>
    }
    else {
      return toggleLoginButton;
    }

  }
}

Signin.propTypes = {
  loggedInUser: React.PropTypes.object,
  isLoggedIn: React.PropTypes.bool
};


export default Signin;
