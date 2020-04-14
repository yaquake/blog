const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0-njnty.mongodb.net/my_database`, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useCreateIndex', true)

const connection = mongoose.connection


module.exports = connection
