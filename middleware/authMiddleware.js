const User = require('../models/user')

module.exports = async (req, res, next) => {
    await User.findById(req.session.userId, (error, user) => {
        if (error || !user) {
            return res.redirect('/')
        }
        next()
    })
}
