const express = require('express');
const app = express();
const { signUp } = require('../actions/signup/signup');
const { confirmEmail } = require('../actions/confirm-email/confirm');

app.post('/signup',(req, res) => {
    signUp(req, res);
});

app.get('/confirm-email/:token', (req, res) => {
    confirmEmail(req, res);
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

module.exports = app;