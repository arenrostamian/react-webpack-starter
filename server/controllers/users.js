const { User } = require('../models')

exports.addUser = (req, res) => {
  const { userID, username } = req.query
  /* * db things * */
  res.sendStatus(201)
}
