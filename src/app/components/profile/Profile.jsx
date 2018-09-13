import React from 'react';

import Auth from '../utils/Auth.jsx';
import loapi from '../utils/loapi.jsx';
import SigninPage from '../signin/SigninPage.jsx';
import UserCard from './UserCard.jsx';
import MapCard from './MapCard.jsx';
import UpdateButton from '../common/UpdateButton.jsx';

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
    if(user && user.email){
      loapi.getprofile(user.email).then(function(data) {
        if(data){
          _this.setState({profile: data.data});
        }else{
          _this.setState({profile: {}});
        }
      });
    }
    console.log(this);


  }

  render() {

    var content;

    if(this.state && this.state.loggedInUser && this.state.loggedInUser.isLoggedIn){
      if(this.state.profile.properties && this.state.profile.key){

        content = (
          <div>
            <UpdateButton
              entityId={this.state.profile.key.id}
              entityKind={this.state.profile.key.kind}
              userAdmin={this.state.profile.properties.isAdmin}
              userEmail={this.state.profile.properties.email}
            />

            <div className="container-fluid my-2">
              <div className="row">
                <div className="col-md bg-white">

                  <UserCard
                    userproperties={this.state.profile.properties}
                  />

                </div>
                <div className="col-md bg-white">

                  <MapCard
                    address={this.state.profile.properties.address}
                  />

                </div>
              </div>
            </div>
          </div>
        );
      }else{

        content = (<div>Loading...</div>);

      }
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
