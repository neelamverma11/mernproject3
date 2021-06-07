const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');

const PORT = process.env.PORT;


// middlware
const middleware = (req, res, next) => {
    console.log(`hllo from the middleware`);
    next();
}

app.get('/', (req, res) => {
    res.send(`helloo form the server.`);
});

app.get('/about', middleware, (req, res) => {
    console.log(`Hello from middleware about`)
    res.send(`helloo form the about.`);
});

app.get('/contact', (req, res) => {
    res.send(`helloo form the contact.`);
});

app.get('/register', (req, res) => {
    res.send(`helloo form the register.`);
});

app.listen(PORT, () => {
    console.log(`port no is ${PORT}`);
});