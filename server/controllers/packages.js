exports.addPackage = (req, res) => {
  const { packageName, vote, comment } = req.query
  /* * db things * */
  res.sendStatus(201)
}

exports.getPackage = (req, res) => {
  const { packageName } = req.query
  // console.log(packageName)
  res.sendStatus(200)
}

exports.updatePackage = (req, res) => {
  const { packageName, vote, comment } = req.query
  /* * db things * */
  res.sendStatus(201)
}
