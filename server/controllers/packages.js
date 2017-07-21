const { Package } = require('../models')

exports.addPackage = (req, res) => {
  const { name, vote, comment } = req.query
  /* * db things * */
  res.sendStatus(201)
}

exports.getPackage = (req, res) => {
  const { name } = req.query
  // console.log(name)
  res.sendStatus(200)
}

exports.updatePackage = (req, res) => {
  const { name, vote, comment } = req.query
  /* * db things * */
  res.sendStatus(201)
}
