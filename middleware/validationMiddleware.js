module.exports = (req, res, next) => {
	
	if ( req.fles == null || req.body.title == null || req.body.body == null  ) {
		
		return redirect('/posts/create')
	}

	next()

}
