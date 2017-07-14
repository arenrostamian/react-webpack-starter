const { getPackageByName, getPackagesByKeyword } = require('./npmUtils/NpmQuery')

exports.npmGetPackage = (req, res) => {
  const { searchType, searchTerm } = req.query
  const npmQuery = searchType === 'name' ? getPackageByName : getPackagesByKeyword
  // try querying npm api https://www.npmjs.com/search?q=promise
  npmQuery(searchTerm)
  .then(npmRes => res.status(200).send(npmRes))
}
