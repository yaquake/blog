require('dotenv').config()

module.exports = (req, res, next) => {
    if (req.body.adminPassword != process.env.CPASS ) {
        console.log('Wrong admin password')
        return res.redirect('/auth/register')
    }
    next()
}
