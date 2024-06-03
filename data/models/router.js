//Require Router package
const express = require('express');

//Add new routers here
const main_router = require('../api/routers/main.router')

//Invoke router method
const router = express.Router();

//Routes
//The bottom line of text is used to add more components with the CLI, not delete.
/*CLI-ROUTER-INSERT-POINT*/
router.use('/', main_router);

//Export
module.exports = router;