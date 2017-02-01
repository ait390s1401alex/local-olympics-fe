import React from 'react';

import Auth from '../utils/Auth.jsx';
import loapi from '../utils/loapi.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: {}
    };

  }

  componentDidMount() {
    var _this = this;

    var user = {};
    if(localStorage.gtoken){
      user = Auth.validateToken(localStorage.gtoken);
      console.log(user);
    }
    _this.setState({loggedInUser: user});
    if(user && user.sub){
      loapi.getprofile(user.sub).then(function(data) {
        _this.setState({profile: data});
      });
    }


  }

  render() {
    var content;

    if(this.state && this.state.loggedInUser){
      content = (
        <div>
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">404</h3>
            </div>
            <div className="panel-body">
              Under Contstruction
            </div>
          </div>
        </div>
      );
    }else{
      content = (<div>test</div>);
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
