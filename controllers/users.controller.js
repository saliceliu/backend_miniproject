const model = require('../models/user')

exports.getAllUsers = function(req, res) {
    let users = model.getAllUsers()
    res.statusCode = 200
    res.json({data: users});
}