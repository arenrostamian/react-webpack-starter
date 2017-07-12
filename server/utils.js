const { getPackagesByName, getPackagesByKeyword } = require('./npmUtils/NpmQuery')

exports.npmGetPackage = (req, res) => {
  const { searchType, value } = req.query
  getPackagesByName(value)
  .then(response => {
    console.log('response ', response)
    res.status(200).send(response)
  })
}
