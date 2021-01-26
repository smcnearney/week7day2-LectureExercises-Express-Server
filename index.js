'use strict'

const HTTP = require('http')

const HOSTNAME = '127.0.0.1';
const PORT = 3333;

const express = require('express');
const app = express(); //gives us access to all of our express functions

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, function() {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
})

const rootController = require('./routes/index');
const friendsController = require('./routes/friends');

// hey express, use the following functions if the user browses to the root route

// express: hey, web dev person, i'll use the express router here for this route
app.use('/', rootController);
app.use('/friends', friendsController);