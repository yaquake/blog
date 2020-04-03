module.exports = (req, res) => {
    
    var username = ""
    const name = req.flash('data')[0]
    console.log(name) 
    if (typeof name != 'undefined') {
        username = name
    }

    res.render('login', {
        error: req.flash('error'),
        name: username
        
    })

}
