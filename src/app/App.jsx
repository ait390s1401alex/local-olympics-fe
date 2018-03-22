import React from 'react';
import { Link, IndexLink } from 'react-router';

import maincss from './app.css';
import Navbar from './components/navbar/Navbar.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Auth from './components/utils/Auth.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: {}
    };

  }

  componentDidMount() {
    var _this = this;

    Auth.getUser(function(data){
      _this.setState({loggedInUser: data});
    });

  }



  render() {
    console.log(this);
    return (
      <div className="container-fluid my-2">
        <Navbar
          loggedInUser={this.state.loggedInUser}
        />
      <div className="my-4">
        {this.props.children}
      </div>
      </div>
    )
  }
}

App.propTypes = {
  loggedInUser: React.PropTypes.object
};



export default App;
