var express = require('express');
var router = express.Router();

const controller = require('../controllers/users.controller')

/* GET users listing. */
router.get('/', controller.getAllUsers)

module.exports = router;
