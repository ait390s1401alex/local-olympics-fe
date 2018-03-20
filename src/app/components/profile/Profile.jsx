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
        <div className="container-fluid my-2">
          <div className="row">
            <div className="col-md bg-white">
              <div className="card my-2">
                <div className="card-header">
                    <h3 className="card-title">{this.state.loggedInUser.name}</h3>
                </div>
                <div className="card-body">
                  <div className="row my-1">
                    <div className="col-sm font-weight-bold">
                      Firstname
                    </div>
                    <div className="col-sm-9">
                      {this.state.loggedInUser.given_name}
                    </div>
                  </div>
                  <div className="row my-1">
                    <div className="col-sm font-weight-bold">
                      Lastname
                    </div>
                    <div className="col-sm-9">
                      {this.state.loggedInUser.family_name}
                    </div>
                  </div>
                  <div className="row my-1">
                    <div className="col-sm font-weight-bold">
                      Email
                    </div>
                    <div className="col-sm-9">
                      {this.state.loggedInUser.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md bg-white">
              <div className="card my-2">
                <div className="card-header">
                  <h3 className="card-title">Map</h3>
                </div>
                <div className="card-body text-center">
                  <img src={this.state.loggedInUser.picture} width="300" height="300"/>
                </div>
              </div>
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
