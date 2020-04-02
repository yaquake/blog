const bcrypt = require('bcrypt')
const User = require('../models/user')

module.exports = async (req, res) => {
    const { name, password } = req.body

    await User.findOne({username: name}, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    req.session.userId = user._id
                    console.log(req.session)
                    res.redirect('/')
                }
                else {
                    console.log('Wrong pwd')
                    res.redirect('/auth/login')
                }
            })
        }
        else {
            console.log('Wrong user')
            res.redirect('/auth/login')
        }

    })}
