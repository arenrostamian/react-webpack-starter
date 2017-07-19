const AWS = require('aws-sdk')
const ddbClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' })

const successMessage = { message: '* * * NOM SUCCESS * * *' }
const ddbUserTable = 'auth0-users'
const ddbPackageTable = 'npm-packages'

exports.addUser = (req, res) => {
  const { userID } = req.body
  const params = {
    TableName: ddbUserTable,
    Item: { 'user-id': userID }
  }
  /* * check if user exists with ddb get some sort of hashed attributes ( ? ) * */
  ddbClient.put(params, (error, response) => {
    res.status(error ? 500 : 200).send(error || successMessage)
  })
}

exports.addPackage = (req, res) => {
  const { packageName, vote, comment } = req.body
  const params = {
    TableName: ddbPackageTable,
    Item: {
      'package-name': packageName,
      'score': Number(vote || 0),
      'comments': [ comment || null ]
    }
  }
  ddbClient.put(params, (error, data) => {
    res.status(error ? 500 : 200).send(error || successMessage)
  })
}

exports.getPackage = (req, res) => {
  const { packageName } = req.query
  const params = {
    TableName: ddbPackageTable,
    Key: { 'package-name': packageName },
    AttributesToGet: ['score', 'comments']
  }
  ddbClient.get(params, (error, data) => {
    const { Item } = data
    res.status(error ? 500 : 200).send(error || { Item })
  })
}

exports.updatePackage = (req, res) => {
  const { packageName, vote, comment } = req.body
  const params = {
    TableName: ddbPackageTable,
    Key: { 'package-name': packageName },
    UpdateExpression: 'set score = score + :v, comments = list_append (comments, :c)',
    ExpressionAttributeValues: {
      ':v': vote,
      ':c': [comment || null]
    }
  }
  ddbClient.update(params, (error, response) => {
    res.status(error ? 500 : 200).send(error || successMessage)
  })
}

exports.updateCommentScore = (req, res) => {
  const { type, packageName, commentTimestamp } = req.body
  const params = {
    TableName: ddbPackageTable,
    Key: {
      'package-name': packageName,
      'timestamp': commentTimestamp
    },
    UpdateExpression: 'set score = score + :v',
    ExpressionAttributeValues: { ':v': type }
  }
  ddbClient.update(params, (error, response) => {
    res.status(error ? 500 : 200).send(error || successMessage)
  })
}
