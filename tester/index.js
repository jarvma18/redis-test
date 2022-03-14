'use strict';

const axios = require('axios');
const url = 'http://api:8080/test/';

setInterval(function() {
  for (let i = 0; i < 5; i++) {
    console.time(i);
    axios.get(url + i)
    .then(function (response) {
      console.timeEnd(i);
      // handle success
      console.log(i, response.data.value, response.data.timestamp);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }
  console.log('###################################');
}, 1000);

setInterval(function() {
  for (let i = 0; i < 5; i++) {
    axios.post(url + i, {
      value: Math.floor(Math.random() * 101),
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