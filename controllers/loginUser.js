const bcrypt = require('bcrypt')
const User = require('../models/user')

module.exports = async (req, res) => {
    const { name, password } = req.body

    await User.findOne({username: name}, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    req.session.userId = user._id
                    
                    res.redirect('/')
                }
                else {
                    req.flash('error', 'Wrong password')
                    req.flash('data', name)
                    res.redirect('/auth/login')
                }
            })
        }
        else {
            req.flash('error', 'Wrong username')
            req.flash('data', name)
            res.redirect('/auth/login')
        }

    })}
