const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('we in dis bitch yo'))

const TestSchema = new mongoose.Schema({
  name: String
})

const TestModel = mongoose.model('TestModel', TestSchema)

const TestModelInstance = new TestModel({ name: 'Armen yo'})

// TestModel.create({ name: 'pink' }, (error, testModelInstance) => {
//   console.log(error || testModelInstance)
// })

TestModelInstance.save((error) {
  console.log(error || 'successfully saved')
})


Test.find({ name: 'Armen' }, console.log('found'))
