// const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')
const { emojify } = require('node-emoji')
mongoose.Promise = global.Promise
const uri = process.env.MONGODB_URI

// async function run () {
//   console.log('1 running')
//   mongoose.connect(uri, { useMongoClient: true })
//   await mongoose.connection.dropDatabase()

//   const TestModel = mongoose.model('Test', new mongoose.Schema({ name: String }))

//   await TestModel.create({ name: 'sparklez' })

//   console.log(await TestModel.find())
// }

const mongoClient = () => {
  mongoose.connect(uri, { useMongoClient: true })
  mongoose.connection.once('open', () => {
    console.log(emojify('MongoDB Connected :facepunch:'))
  })
}

module.exports = mongoClient
