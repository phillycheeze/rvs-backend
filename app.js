var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')
var corsOptions = require('./cors.js');

// Models
const db = require('./models');
db.sequelize.sync()

// Routes
var admin = require('./routes/admin');
var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(cors(corsOptions))

// Enable pre-flight requests for all routes
app.options('*', cors(corsOptions))

app.use('/api/v1/admin', admin);
app.use('/api/v1/users', users);

module.exports = app;
