const express = require('express');

const {homePageController} = require('./initial.controllers');

const initialRouter = express.Router();

initialRouter.get('/', homePageController);
module.exports = initialRouter;