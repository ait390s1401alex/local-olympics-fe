import React from 'react';

import Auth from '../utils/Auth.jsx';
import loapi from '../utils/loapi.jsx';
import SigninPage from '../signin/SigninPage.jsx'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };

  }

  componentDidMount() {
    var _this = this;

    var user = {};
    if(localStorage.gtoken){
      user = Auth.validateToken(localStorage.gtoken);
    }
    _this.setState({loggedInUser: user});
    if(user && user.sub){
      loapi.getprofile(user.sub).then(function(data) {
        if(data){
          _this.setState({profile: data});
        }else{
          _this.setState({profile: {}});
        }
      });
    }


  }

  render() {
    var content;

    if(this.state && this.state.loggedInUser && this.state.loggedInUser.isLoggedIn){
      content = (
        <div>
          <div className="card bg-light">
            <div className="card-header">
              <h3 className="card-title">Under Construction</h3>
            </div>
            <div className="card-body">
              Under Contstruction
            </div>
          </div>
        </div>
      );
    }else{
      content = (<SigninPage />);
    }

    return(
      <div>
        {content}
      </div>
    )



  }
}

Profile.contextTypes = {
  loggedInUser: React.PropTypes.object
};

export default Profile;
