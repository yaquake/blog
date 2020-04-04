module.exports = (req, res) => {
	if (req.session.userId) {
        var title = ""
        var body = ""
        
        const data = req.flash('data')[0]
        
        if (typeof data != "undefined") {
            title = data.title
            body = data.body
        }
        
        
        return res.render('create', {
            errors: req.flash('validationErrors'),
            title: title,
            body: body,
            createPost: true
        })
    }
    res.redirect('/auth/login')
}
