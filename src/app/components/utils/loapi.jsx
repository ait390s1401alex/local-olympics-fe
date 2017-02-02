import React from 'react';
import axios from 'axios';

var app_settings = require("json!./../../../config/app_settings.json");


var axiosConfig = {
  baseURL: app_settings.baseURL,
  headers: {'Access-Control-Allow-Origin': '*'}
};

module.exports = {

  getprofile(uid) {
    var url = '/rest/participant/' + uid;
    //var url = '/rest/participant/all'
    return axios.get(url, axiosConfig)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log("error: " + error);
      return;
    });

  }

}
