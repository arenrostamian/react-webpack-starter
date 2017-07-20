const mongoose = require('mongoose')
const { USER, PACKAGE, COMMENT } = require('./refs')

const { Schema } = mongoose
const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new Schema({
  // _id: ObjectId,
  _authID: Number,
  username: String
})

exports.UserModel = mongoose.model(USER, userSchema)
