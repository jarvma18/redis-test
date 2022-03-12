'use strict';

const redis = require('redis');

let client = null;

(async () => {
  client = redis.createClient({
    url: 'redis://redis:6379'
  });
  client.on('error', (err) => console.log('Redis Client Error', err));
  await client.connect();
})();

const getTest = async (req, res) => {
  if (!client) {
    res.status = 404;
  }
  // console.log('getTest');
  let response = await client.hGetAll('device:' + req.params.id);
  res.send(response);
};

const setTest = async (req, res) => {
  if (!client) {
    res.status = 404;
  }
  // console.log('setTest', req.params, req.body);
  await client.hSet(
    'device:' + req.params.id,
    'value',
    req.body ? req.body.value : null
  );
  await client.hSet(
    'device:' + req.params.id,
    'errorMessage',
    req.body ? req.body.errorMessage : null
  );
  await client.hSet(
    'device:' + req.params.id,
    'timestamp',
    req.body ? req.body.timestamp : null
  );
  res.status = 200;
};

exports.getTest = getTest;
exports.setTest = setTest;