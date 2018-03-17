import React from 'react';

class SigninPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    var content;

      content = (
        <div>
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Sign in</h3>
            </div>
            <div className="panel-body">
              Please sign in to view your profile
            </div>
          </div>
        </div>
      );

    return(
      <div>
        {content}
      </div>
    )



  }
}

SigninPage.contextTypes = {

};

export default SigninPage;
