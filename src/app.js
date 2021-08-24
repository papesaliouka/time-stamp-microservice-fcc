var express = require('express');
var cors = require('cors');
const path = require('path');

const initialRouter = require('./routes/initial.router');
const apiRouter = require('./routes/api.router')

var app = express();

app.use(cors({optionsSuccessStatus: 200})); 
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(initialRouter);
app.use('/api/', apiRouter)



module.exports = app;