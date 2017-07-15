const { ddbAddPackage, ddbGetPackage, ddbUpdatePackage } = require('./ddbUtils/packageUtils')

exports.addPackage = (req, res) => {
  const packageDetails = req.query
  ddbAddPackage(packageDetails)
  .then(() => res.status(200).send())
  .catch(error => console.log('add package error', error))
}

exports.getPackage = (req, res) => {
  const { packageName } = req.query
  ddbGetPackage(packageName)
  .then(item => res.status(200).send(item))
  .catch(error => console.log(error))
}

exports.updatePackage = (req, res) => {
  const { packageName, detailsToUpdate } = req.query
  ddbUpdatePackage(packageName, detailsToUpdate)
  .then(() => res.status(200).send())
  .catch(error => console.log(error))
}
