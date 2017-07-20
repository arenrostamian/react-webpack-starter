const mongoose = require('mongoose')
const { USER, PACKAGE, COMMENT } = require('./refs')

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const packageSchema = new Schema({
  _id: ObjectId,
  packageName: String,
  packageScore: Number,
  comments: [{ type: ObjectId, ref: PACKAGE }]
})

exports.PackageModel = mongoose.model(PACKAGE, packageSchema)
