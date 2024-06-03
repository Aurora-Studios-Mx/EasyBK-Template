//Require Router package
const express = require('express');

//Requires
//The bottom line of text is used to add more components with the CLI, not delete.
/*CLI-REQUIRES-INSERT-POINT*/
const main_router = require('../api/routers/main.routes')

//Invoke router method
const router = express.Router();

//Routes
//The bottom line of text is used to add more components with the CLI, not delete.
/*CLI-ROUTER-INSERT-POINT*/
router.use('/', main_router);

//Export
module.exports = router;