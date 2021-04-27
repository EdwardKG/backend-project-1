const mongoose = require('mongoose');
const express = require('express');
const app = express();
const { mongoUri } = require('./config.json');
const middleware = require('./middleware/middleware');

mongoose.connect(mongoUri,{
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
})
.then(() => {
    console.log('Conntect to DB');
})
.catch((e) => {
    console.log('Error:', e);
})

app.use(middleware);
app.listen(9000);