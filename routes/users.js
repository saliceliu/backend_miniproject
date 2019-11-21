var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', controller.getAllUsers)

module.exports = router;
