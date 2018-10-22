import React from 'react';

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var _this = this;
  }

  render() {

    var content;

    if(this.props && this.props.userproperties){

      content = (

        <div className="card my-2">
          <div className="card-header">
              <h3 className="card-title">{this.props.userproperties.Alias}</h3>
          </div>
          <div className="card-body">
            <div className="row my-1">
              <div className="col-sm font-weight-bold">
                First name
              </div>
              <div className="col-sm-8">
                {this.props.userproperties.firstName}
              </div>
            </div>
            <div className="row my-1">
              <div className="col-sm font-weight-bold">
                Last name
              </div>
              <div className="col-sm-8">
                {this.props.userproperties.lastName}
              </div>
            </div>
            <div className="row my-1">
              <div className="col-sm font-weight-bold">
                Email
              </div>
              <div className="col-sm-8">
                {this.props.userproperties.email}
              </div>
            </div>
            <div className="row my-1">
              <div className="col-sm font-weight-bold">
                Alias
              </div>
              <div className="col-sm-8">
                {this.props.userproperties.Alias}
              </div>
            </div>
            <div className="row my-1">
              <div className="col-sm font-weight-bold">
                About Me
              </div>
              <div className="col-sm-8">
                {this.props.userproperties.aboutme}
              </div>
            </div>
            <div className="row my-1">
              <div className="col-sm font-weight-bold">
                Address
              </div>
              <div className="col-sm-8">
                {this.props.userproperties.address}
              </div>
            </div>
            <div className="row my-1">
              <div className="col-sm font-weight-bold">
                Favorite Activity
              </div>
              <div className="col-sm-8">
                {this.props.userproperties.activity}
              </div>
            </div>
            <div className="row my-1">
              <div className="col-sm font-weight-bold">
                Birthday
              </div>
              <div className="col-sm-8">
                {this.props.userproperties.birthday}
              </div>
            </div>
            <div className="row my-1">
              <div className="col-sm font-weight-bold">
                Gender
              </div>
              <div className="col-sm-8">
                {this.props.userproperties.gender}
              </div>
            </div>
          </div>
        </div>

      )

    } else {
      content = (
        <div>empty</div>
      )
    }

    return (
      <div>
        {content}
      </div>
    )


  }
}

UserCard.contextTypes = {
  userproperties: React.PropTypes.object
};

export default UserCard;
