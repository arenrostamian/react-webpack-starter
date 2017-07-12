const { getPackageByName, getPackagesByKeyword } = require('./npmUtils/NpmQuery')

exports.npmGetPackage = (req, res) => {
  console.log('npm get package')
  const { searchType, value } = req.query
  getPackageByName(value)
  .then(response => {
    console.log('response ', response)
    res.status(200).send(response)
  })
}
