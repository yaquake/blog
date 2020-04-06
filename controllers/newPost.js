module.exports = (req, res) => {
	if (req.session.userId) {
        var title = ""
        var body = ""
        var subheading = ""
        const data = req.flash('data')[0]
        
        if (typeof data != "undefined") {
            title = data.title
            body = data.body
            subheading = data.subheading
        }
        
        
        return res.render('create', {
            errors: req.flash('validationErrors'),
            title: title,
            body: body,
            subheading: subheading,
            createPost: true
        })
    }
    res.redirect('/auth/login')
}
