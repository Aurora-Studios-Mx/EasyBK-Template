//Require Router package
const express = require('express');

//Add new routers here
const main_router = require('../api/routers/main.router')

//Invoke router method
const router = express.Router();

//Routes
//Add new routers here
router.use('/', main_router);

//Export
module.exports = router;