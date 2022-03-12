'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const testHandler = require('./handlers/test');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/test/:id', testHandler.getTest);
app.post('/test/:id', testHandler.setTest);

console.log('API listening port', config.PORT);
app.listen(config.PORT);