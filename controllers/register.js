module.exports = (req, res) => {
	var username = ""
    var password = ""
    const data = req.flash('data')[0]
    
    if (typeof data != 'undefined' ) {
        username = data.name
        password = data.password
    }
    
    
    res.render('register', 
        { errors: req.flash('validationErrors'),
          username: username,
            password: password
        })
}
