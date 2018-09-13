import React from 'react';

import loapi from '../utils/loapi.jsx';
import ProfileForm from '../profile/ProfileForm.jsx'

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entityData: {}
    };
  };


  componentDidMount() {
    var _this = this;
    if(_this.props.location.state.kind && _this.props.location.state.entityId){
      loapi.getEntityData(_this.props.location.state.kind.toLowerCase(), _this.props.location.state.entityId).then(function(data) {
        if(data){
          _this.setState({entityData: data.data});
          console.log(data);
        }else{
          _this.setState({entityData: {}});
          console.log("no data");
        }
      });
    }
    console.log(this);

  }

  render() {
    var content = <div>Loading...</div>;

    if(this.state && this.state.entityData && this.state.entityData.properties){
      var properties = this.state.entityData.properties;

      if(this.props.location.state.kind.toLowerCase() ==  'participant'){
        content = (
          <div>
            <ProfileForm data={this.state.entityData.properties} />
          </div>
        )
      }
      /*
      content = (
        <div>
          <div>
            {this.props.location.state.kind}
            {this.props.location.state.userEmail}
            {this.props.location.state.userAdmin}
            {this.props.location.state.entityId}
          </div>
          <div>
            {this.state.entityData.properties.Alias}
          </div>
      </div>
      )
      */
    }


    return(
      <div>
        {content}
      </div>
    )
  }


}

Update.contextTypes = {
  entityData: React.PropTypes.object
};

export default Update;
