const express = require('express');

const {dateController, emptyDateController} = require('./api.controller')

const apiRouter = express.Router();

apiRouter.get('/:date',dateController);
apiRouter.get('/:date', emptyDateController);

module.exports=apiRouter