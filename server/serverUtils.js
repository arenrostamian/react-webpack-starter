const { ddbAddPackage, ddbGetPackage, ddbUpdatePackage } = require('./ddbUtils/packages')
const addSuccess = { message: `* * * SUCCESSFULLY NOMMED * * *` }
const updateSuccess = { message: `* * * SUCCESSFULLY UPDATENOMMED * * *` }

exports.addPackage = (req, res) => {
  ddbAddPackage(req.body)
  .then(() => res.status(200).send(addSuccess))
  .catch(error => console.log('ERROR ADDING PACKAGE :(', error))
}

exports.getPackage = ({ query }, res) => {
  ddbGetPackage(query.packageName)
  .then(item => res.status(200).send(item))
  .catch(error => console.log('ERROR GETTING PACKAGE :(', error))
}

exports.updatePackage = (req, res) => {
  ddbUpdatePackage(req.body)
  .then(() => res.status(200).send(updateSuccess))
  .catch(error => console.log('ERROR UPDATING PACKAGE :(', error))
}
