// const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI

async function run () {
  console.log('1 running')
  mongoose.connect(uri, { useMongoClient: true })
  await mongoose.connection.dropDatabase()

  const TestModel = mongoose.model('Test', new mongoose.Schema({ name: String }))

  await TestModel.create({ name: 'sparklez' })

  console.log(await TestModel.find())
}

// async function test () {
//   const testRooms = await mongoose.connect(uri, {us})
// }

module.exports = run
