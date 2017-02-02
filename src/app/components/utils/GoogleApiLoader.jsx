import React from 'react';

// get google app id from app settings configuration file
var app_settings = require("json!./../../../config/app_settings.json");

var sign2Loaded = false;
var auth2Loaded = false;
var auth2;

module.exports = {

  authLoaded(callback) {
    var check = function () {
      if (auth2Loaded && sign2Loaded) {
        callback();
      }
      else {
        window.setTimeout(function () {
          check();
        }, 50);
      }
    }
    check();
  },

  gapiLoaded(callback) {
    var hasgapi = function () {
      if (typeof (gapi) !== "undefined" && gapi.client) {
        callback();
      }
      else {
        window.setTimeout(function () {
          hasgapi();
        }, 50);
      }
    }

    hasgapi();
  },

  getAuth2() {
    return auth2;
  },

  signIn() {
    this.getAuth2().signIn().then(function (success) {
      window.location.replace(app_settings.baseURL);
    }, function (fail) {
    });
  },

  signOut() {
    this.getAuth2().signOut().then(function (success) {
      window.location.replace(app_settings.baseURL);
    }, function (fail) {
    });
  }
}



module.exports.gapiLoaded(function () {
  gapi.load('auth2', function () {
    auth2 = gapi.auth2.init({
      client_id: app_settings.client_id
    });
    auth2Loaded = true;
  });

  gapi.load('signin2', function () {
    sign2Loaded = true;
  });
});
