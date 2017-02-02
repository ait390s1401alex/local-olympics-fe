import React from 'react';
import jwt from 'jsonwebtoken';

import googleApiLoader from './GoogleApiLoader.jsx';

module.exports = {

  getUser(callback) {

    googleApiLoader.authLoaded(function () {

      googleApiLoader.getAuth2().currentUser.listen(function (user) {
        var profileProxy = {};
        if (user.getBasicProfile()) {
          localStorage.gtoken = user.getAuthResponse().id_token;
          profileProxy = module.exports.validateToken(localStorage.gtoken);
        }
        if(user.getBasicProfile()){
          profileProxy.isLoggedIn = true;
        }else{
          profileProxy.isLoggedIn = false;
        }
        callback(profileProxy);
      });
    });
  },

  validateToken(token) {
    //TODO - validate token on backend
    var decoded = jwt.decode(token);
    return decoded;
  },

  isAuthenticated(){
    //TODO
  }

}
