const mongoose = require('mongoose')
const { emojify } = require('node-emoji')
const uri = process.env.MONGODB_URI

mongoose.Promise = global.Promise
mongoose.connect(uri)

const db = mongoose.connection
const successMsg = emojify('\nConnected :facepunch:\n')
const errorMsg = emojify(('\n:zap:  :zap:  :zap:   ERROR   :zap:  :zap:  :zap:\n\n'))

module.exports = { db, successMsg, errorMsg }
