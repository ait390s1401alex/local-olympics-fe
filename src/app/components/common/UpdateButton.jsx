import React from 'react';
import { Link } from 'react-router';


class UpdateButton extends React.Component {
  constructor(props) {
    super(props);
  };


  componentDidMount() {
    var _this = this;

  }

  render() {
    var content;

    if(this.props.entityId && this.props.userAdmin){
      content = (
        <div>
          <Link className="btn btn-primary"  to={{
              pathname: '/update',
              state: { kind: `${this.props.entityKind}`, userAdmin: `${this.props.userAdmin}`, userEmail: `${this.props.userEmail}`, entityId: `${this.props.entityId}`}
            }}>Update</Link>
          button+{this.props.entityId}
        </div>
      );
    }else{
      content = (
        <div>
          button disabled
        </div>
      )
    }

    return(
      <div>
        {content}
      </div>
    )
  }


}

UpdateButton.contextTypes = {
  entityId: React.PropTypes.object,
  userAdmin: React.PropTypes.object,
  userEmail: React.PropTypes.object,
  kind: React.PropTypes.object
};

export default UpdateButton;
