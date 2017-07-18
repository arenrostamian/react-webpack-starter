/* * TODO move these into serverUtils * */
const { ddbAddPackage, ddbGetPackage, ddbUpdatePackage } = require('./ddbUtils/packages')
const addPackageSuccess = { message: `* * * SUCCESSFULLY NOMMED * * *` }
const updatePackageSuccess = { message: `* * * SUCCESSFULLY UPDATENOMMED * * *` }
const addUserSuccess = { message: `* * * SUCCESSFULLY ADDED USER * * *` }

const AWS = require('aws-sdk')

const ddbClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' })
const tableName = 'auth0-users'

exports.addPackage = (req, res) => {
  ddbAddPackage(req.body)
  .then(() => res.status(200).send(addPackageSuccess))
  .catch(error => console.log('ERROR ADDING PACKAGE :(', error))
}

exports.getPackage = ({ query }, res) => {
  ddbGetPackage(query.packageName)
  .then(item => res.status(200).send(item))
  .catch(error => console.log('ERROR GETTING PACKAGE :(', error))
}

exports.updatePackage = (req, res) => {
  ddbUpdatePackage(req.body)
  .then(() => res.status(200).send(updatePackageSuccess))
  .catch(error => console.log('ERROR UPDATING PACKAGE :( ', error))
}

exports.ddbAddUser = (req, res) => {
  const { userID } = req.body
  const params = {
    TableName: tableName,
    Item: { 'user-id': userID }
  }
  /* * check if user exists with ddb get some sort of hashed attributes ( ? ) * */
  ddbClient.put(params, (error, data) => {
    if (error) {
      res.status(500).send('ERROR ADDING USER :( ', error)
    } else {
      res.status(200).send(addUserSuccess)
    }
  })
}
