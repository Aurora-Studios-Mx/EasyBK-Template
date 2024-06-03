//Call Express package
const express = require('express');

//Invoke router method
const router = express.Router();

//Call controller to router
const controller = require('../controllers/main.controller')

//Routes
router.get('/', controller.init);
router.get('*', controller.notfound)

//Export
module.exports = router;