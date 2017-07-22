const { User } = require('../models')

exports.addUser = (req, res) => {
  const { id, authId, username } = req.query
  User
  .query()
  .insert({
    id: Number(id),
    authId: Number(authId),
    username: username
  })
  .then(armen => {
    console.log('updated! ', armen)
    res.status(201).send('updated')
  })
  .catch(error => {
    console.log(error)
    res.status(500).send('error updating ')
  })
}
