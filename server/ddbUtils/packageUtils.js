const AWS = require('aws-sdk')
const path = require('path')

AWS.config.loadFromPath(path.join(__dirname, './config.json'))

const ddbClient = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' })
const tableName = 'npm-packages'

exports.ddbAddPackage = (packageDetails) => {
  const { name, vote, comment } = packageDetails
  /* * vote will be 'upvote' 'downvote' * */
  const params = {
    TableName: tableName,
    Item: {
      'package-name': name,
      'package-score': vote || 0,
      'comments': comment ? [ comment ] : []
    }
  }
  return new Promise((resolve, reject) => {
    ddbClient.put(params, (error, data) => {
      error ? reject(error) : resolve(data)
    })
  })
}

exports.ddbGetPackage = (packageName) => {
  const params = {
    TableName: tableName,
    Key: { 'package-name': packageName },
    AttributesToGet: ['package-score', 'comments']
  }
  return new Promise((resolve, reject) => {
    ddbClient.get(params, (error, data) => {
      error ? reject(error) : resolve(data.Item)
    })
  })
}

exports.ddbUpdatePackage = (packageName, detailsToUpdate) => {
  const { vote, comment } = detailsToUpdate
  const params = {
    TableName: tableName,
    Key: { 'package-name': packageName },
    UpdateExpression: 'add comments = :c, package-score = package-score + :v',
    ExpressionAttributeValues: {
      ':c': comment,
      ':v': vote
    },
    ReturnValues: 'UPDATED_NEW'
  }
  return new Promise((resolve, reject) => {
    ddbClient.update(params, (error, data) => {
      error ? reject(error) : resolve(data)
    })
  })
}
