const User = require('../models/user')
const path = require('path')

module.exports = async (req, res) => {
    
    User.create({username: req.body.name, password: req.body.password}, (error, user) => {
        if (error) {
            console.log(error)
            return res.redirect('/auth/register')
        }
        res.redirect('/')

    }
    )}
