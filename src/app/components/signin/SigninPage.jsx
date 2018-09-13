import React from 'react';

import Signin from './Signin.jsx';

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
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Sign in</h3>
            </div>
            <div className="card-body">
              Please <Signin/> to view your profile
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
