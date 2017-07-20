const mongoose = require('mongoose')
const { USER, PACKAGE, COMMENT } = require('./refs')

const { Schema } = mongoose
const ObjectId = mongoose.Schema.Types.ObjectId

const commentSchema = new Schema({
  _id: ObjectId,
  _packageName: { type: ObjectId, ref: PACKAGE },
  _creator: { type: ObjectId, ref: USER },
  _replies: { type: ObjectId, ref: COMMENT, default: null },
  timestamp: Number,
  text: String,
  score: Number
})

exports.CommentModel = mongoose.model('Comment', commentSchema)
