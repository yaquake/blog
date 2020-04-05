const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0-njnty.mongodb.net/my_database`, {useNewUrlParser: true, useUnifiedTopology: true})


const connection = mongoose.connection


module.exports = connection
