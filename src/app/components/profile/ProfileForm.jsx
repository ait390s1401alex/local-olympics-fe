import React from 'react';
import Link from 'react-router';

import UpdateButton from '../common/UpdateButton.jsx';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    var _this = this;

    console.log(this);


  }

  submitForm(event){
    window.location.replace("/profile");
  }

  render() {

    var content = <div>Loading...</div>;

    if(this.props && this.props.data){

      content = (
        <div>
          <form name="form_update" onSubmit={this.submitForm}>
            <div className="card my-2">
              <div className="card-header">
                  <h3 className="card-title">{this.props.data.Alias}</h3>
              </div>
              <div className="card-body">
                <div className="row my-1">
                  <div className="col-sm font-weight-bold">
                    First name
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      defaultValue={this.props.data.firstName}
                      />
                  </div>
                </div>
                <div className="row my-1">
                  <div className="col-sm font-weight-bold">
                    Last name
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      defaultValue={this.props.data.lastName}
                      />
                  </div>
                </div>
                <div className="row my-1">
                  <div className="col-sm font-weight-bold">
                    Email
                  </div>
                  <div className="col-sm-8">
                    {this.props.data.email}
                  </div>
                </div>
                <div className="row my-1">
                  <div className="col-sm font-weight-bold">
                    Alias
                  </div>
                  <div className="col-sm-8">
                    {this.props.data.Alias}
                  </div>
                </div>
                <div className="row my-1">
                  <div className="col-sm font-weight-bold">
                    About Me
                  </div>
                  <div className="col-sm-8">
                    <textarea
                      name="aboutme"
                      className="form-control"
                      defaultValue={this.props.data.aboutme}
                      />
                  </div>
                </div>
                <div className="row my-1">
                  <div className="col-sm font-weight-bold">
                    Address
                  </div>
                  <div className="col-sm-8">
                    {this.props.data.address}
                  </div>
                </div>
                <div className="row my-1">
                  <div className="col-sm font-weight-bold">
                    Favorite Activity
                  </div>
                  <div className="col-sm-8">
                    <textarea
                      name="activity"
                      className="form-control"
                      defaultValue={this.props.data.activity}
                      />
                  </div>
                </div>
                <div className="row my-1">
                  <div className="col-sm font-weight-bold">
                    Birthday
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      name="birthday"
                      className="form-control"
                      defaultValue={this.props.data.birthday}
                      />
                  </div>
                </div>
                <div className="row my-1">
                  <div className="col-sm font-weight-bold">
                    Gender
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      name="birthday"
                      className="form-control"
                      defaultValue={this.props.data.gender}
                      />
                  </div>
                </div>
              </div>
            </div>
            <input type="submit" className="btn btn-primary" value="Save"/>
          </form>
        </div>
      );

    }else{
      content = (<div>no data</div>);
    }

    return(
      <div>
        {content}
      </div>
    )



  }
}

ProfileForm.contextTypes = {
  loggedInUser: React.PropTypes.object
};

export default ProfileForm;
