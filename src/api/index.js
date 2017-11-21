'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Import Routes
const index = require('./routes/index');
const users = require('./routes/users');
const auth = require('./routes/auth');

// Settings
let app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use('/', index);
app.use('/auth', auth);
app.use('/users', users);

// Middleware
app.use(require('./middleware/404'));
app.use(require('./middleware/500'));

module.exports = app;
