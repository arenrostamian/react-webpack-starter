const { ddbAddPackage, ddbGetPackage, ddbUpdatePackage } = require('./ddbUtils/packages')
const addSuccessMessage = (packageName) => {
  return { message: `* * * * 200 || SUCCESSFULLY NOMMED ${packageName.toUpperCase()} * * * *` }
}
const updateSuccessMessage = (packageName) => {
  return { message: `* * * * 200 || SUCCESSFULLY UPDATENOMMED ${packageName.toUpperCase()} * * * *` }
}

exports.addPackage = ({ query }, res) => {
  ddbAddPackage(query)
  .then(() => res.status(200).send(addSuccessMessage(query.packageName)))
  .catch(error => console.log('ERROR ADDING PACKAGE :(', error))
}

exports.getPackage = ({ query }, res) => {
  ddbGetPackage(query.packageName)
  .then(item => res.status(200).send(item))
  .catch(error => console.log('ERROR GETTING PACKAGE :(', error))
}

exports.updatePackage = ({ query }, res) => {
  ddbUpdatePackage(query)
  .then(() => res.status(200).send(updateSuccessMessage(query.packageName)))
  .catch(error => console.log('ERROR UPDATING PACKAGE :(', error))
}
