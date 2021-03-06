const express = require('express')
const ejs = require('ejs')
const app = express()
let  port = process.env.PORT
if (port == null || port == "") {
    port = 4000
}

const connection = require('./connection')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const flash = require('connect-flash')




// express-fileupload for uploading files
const fileUpload = require('express-fileupload')

// Controllers
const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const getPostController = require('./controllers/getPost')
const storePostController = require('./controllers/storePost')
const searchController = require('./controllers/search')
const contactController = require('./controllers/contact')
const newUserController = require('./controllers/register')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutUserController = require('./controllers/logoutUser')
const morePostsController = require('./controllers/morePosts')
const allUsersPostsController = require('./controllers/allUsersPosts')
const deletePostController = require('./controllers/deletePost')
const editPostController = require('./controllers/editPost')
const deleteItController = require('./controllers/deleteIt')

// Middleware
const authValidation = require('./middleware/authMiddleware')
const validationMiddleware = require('./middleware/validationMiddleware')
const adminPasswordValidation = require('./middleware/adminPasswordValidationMiddleware')
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')

app.use(flash())

// Sessions
app.use(expressSession({
    secret: process.env.SECRET_KEY_SESSIONS,
    resave: false,
    saveUninitialized: true,
}))

// UserID throughout the whole website
global.loggedIn = null
app.use("*", (req, res, next) => {
    //console.log(req.session)
    loggedIn = req.session.userId
    next()
})



app.use(fileUpload())

// Use our custom middleware for only post save endpoint
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Form validations
//app.use('/posts/store', validationMiddleware)
app.use('/users/register', adminPasswordValidation)

// Static and template engine
app.use(express.static('public'))
app.set('view engine', 'ejs')


app.get('/', homeController )
app.get('/older', morePostsController )

	
	
app.post('/', searchController)


app.get('/contact', contactController)


app.get('/post/:id', getPostController)


app.get('/posts/create', authValidation, newPostController)

app.post('/posts/store', authValidation, storePostController)

app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)
app.get('/auth/logout', logoutUserController)


app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController)
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController)

app.get('/:name/posts', allUsersPostsController)

app.get('/delete/:id', authValidation, deletePostController)
app.get('/deletepost/:id', authValidation, deleteItController)
app.get('/edit/:id', authValidation, editPostController)


app.use((req, res) => res.render('notfound'))


app.listen(port, ()=> {
	console.log(`App listening on port ${port}`)
})
