const mongoose = require('mongoose')
const Schema = mongoose.Schema

const npmPackagesSchema = new Schema({
  packageName: String,
  packageScore: Number,
  comments:

})



Item: {
  'package-name': string,
  'package-score': int || 0 ,
  'comments': comment ? [ commentObject ] : []
}