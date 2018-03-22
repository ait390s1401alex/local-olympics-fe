import React from 'react';

class MapCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    var content;

    if(this.props && this.props.address){
      content = (

        <div className="card my-2">
          <div className="card-header">
            <h3 className="card-title">Map</h3>
          </div>
          <div className="card-body text-center">
            {this.props.address}
          </div>
        </div>

      )
    }

    return (
      <div>
        {content}
      </div>
    )
  }
}

MapCard.contextTypes = {
  address: React.PropTypes.object
};

export default MapCard;
