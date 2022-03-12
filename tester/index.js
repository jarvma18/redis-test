'use strict';

const axios = require('axios');
const url = 'http://api:8080/test/';

setInterval(function() {
  for (let i = 0; i < 10; i++) {
    axios.get(url + i)
    .then(function (response) {
      // handle success
      console.log(i, response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }
}, 1000);

setInterval(function() {
  for (let i = 0; i < 10; i++) {
    axios.post(url + i, {
      value: Math.random(),
      errorMessage: null,
      timestamp: new Date()
    })
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}, 1000);