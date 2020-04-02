module.exports = (req, res, next) => {
    if (req.body.adminPassword != 'tuhasuga' ) {
        console.log('Wrong admin password')
        return res.redirect('/auth/register')
    }
    next()
}
