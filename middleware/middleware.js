const express = require('express');
const app = express();
const router = require('../router/router');
const bodyParser = require('body-parser');
//Configuration ...
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}) 
app.use(bodyParser.json());

app.use(router);

module.exports = app;