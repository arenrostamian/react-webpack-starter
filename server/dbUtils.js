const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI
const {UserModel} = require('../mongoDB/models/user')

mongoose.Promise = global.Promise

exports.testAddUser = (userID, username) => {
  console.log('WE in HERE.')
  const user = new UserModel({
    _authID: userID,
    username: username
  })
  user.save((error) => {
    if (error) throw error
    console.log('updated')
  })
}
