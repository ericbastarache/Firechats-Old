const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const http = require('http');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('*', (req, res) => res.status(200.send({
  message: "Welcome to nothing. Were you surprised?",
}));

module.exports = app;
