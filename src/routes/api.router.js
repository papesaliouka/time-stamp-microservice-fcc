const express = require('express');

const {dateController} = require('./api.controller')

const apiRouter = express.Router();

apiRouter.get('/', (req,res)=>{
    res.json({unix: new Date().valueOf(), utc: new Date().toString()})
})

apiRouter.get('/:date',dateController);

module.exports=apiRouter