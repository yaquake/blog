const User = require('../models/user')
const path = require('path')

module.exports = async (req, res) => {
    
    await User.create({username: req.body.name, password: req.body.password}, (error, user) => {
        if (error) {
            
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
            
            return res.redirect('/auth/register')
        }
        res.redirect('/')

    }
    )}
