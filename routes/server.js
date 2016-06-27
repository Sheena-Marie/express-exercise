/*jshint esversion: 6 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes.js');
const middleware = require('./middleware');

app.use(bodyParser());

app.use((req, res, next) => {
  console.log('I\'m a middleware!');
  next();
});

app.use('/', routes);

app.use(middleware.errors);

module.exports = app;
