import React from 'react';
import axios from 'axios';

var app_settings = require("json!./../../../config/app_settings.json");


var axiosConfig = {
  baseURL: app_settings.baseURL,
  headers: {'Access-Control-Allow-Origin': '*'}
};

module.exports = {

  getprofile(email) {
    var url = 'http://20.localolympics.appspot.com/rest/participant/email/' + email;
    var instance = axios.create(axiosConfig);
    return instance.get(url)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log("error: " + error);
      return;
    });

  },

  getEntityData(entityKind, entityId) {
    var url = 'http://20.localolympics.appspot.com/rest/' + entityKind + '/' + entityId;
    var instance = axios.create(axiosConfig);
    return instance.get(url)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log("error: " + error);
      return;
    });

  }

}
