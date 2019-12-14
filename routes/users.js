var express = require('express');
var router = express.Router();

const controller = require('../controllers/users.controller')

/* GET users listing. */
router.get('/', controller.getAllUsers)

module.exports = router;

exports.getUsers = async function() {
    var MongoClient = require('mongodb').MongoClient
    let client = await MongoClient.connect(
        'mongodb://0.0.0.0:27017',
        {useUnifiedTopology: true}
    )
    let db = client.db('users')
    let result = await db.collection("users").find().toArray()
    client.close();
    return result
}