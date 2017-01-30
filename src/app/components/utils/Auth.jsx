import React from 'react';
import jwt from 'jsonwebtoken';

import googleApiLoader from './GoogleApiLoader.jsx';

module.exports = {

  getUser(callback) {

    googleApiLoader.authLoaded(function () {

      googleApiLoader.getAuth2().currentUser.listen(function (user) {
        var profileProxy = {};
        if (user.getBasicProfile()) {
          var profile = user.getBasicProfile();
          profileProxy.id = profile.getId();
          profileProxy.name = profile.getName();
          profileProxy.thumb = profile.getImageUrl();
          profileProxy.email = profile.getEmail();
          profileProxy.token = user.getAuthResponse().id_token;
          localStorage.gtoken = profileProxy.token;
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
    var decoded = jwt.decode(token);
    return decoded;
  },

  isAuthenticated(){

  }

}
