import React from 'react';
import axios from 'axios';

// need to update with correct base
var baseUrl = "localhost:8080"

module.exports = {

  getprofile(uid) {
    var url = baseUrl + '/rest/participant/' + uid;
    return axios.get(url)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


  }

}
