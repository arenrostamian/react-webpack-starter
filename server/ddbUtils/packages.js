const AWS = require('aws-sdk')

const ddbClient = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' })
const tableName = 'npm-packages'

exports.ddbAddPackage = (packageDetails) => {
  const { packageName, vote, comment } = packageDetails
  const commentObject = comment ? JSON.parse(comment) : null
  const params = {
    TableName: tableName,
    Item: {
      'package-name': packageName,
      'score': Number(vote || 0),
      'comments': comment ? [ commentObject ] : []
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
    AttributesToGet: ['score', 'comments']
  }
  return new Promise((resolve, reject) => {
    ddbClient.get(params, (error, data) => {
      const { comments, score } = data.Item
      error ? reject(error) : resolve({ comments, score })
    })
  })
}

exports.ddbUpdatePackage = ({ packageName, vote, comment }) => {
  const commentObject = JSON.parse(comment)
  const voteParams = {
    TableName: tableName,
    Key: { 'package-name': packageName },
    UpdateExpression: 'set score = score + :v, comments = list_append (comments, :c)',
    ExpressionAttributeValues: {
      ':v': Number(vote),
      ':c': [commentObject]
    }
  }
  return new Promise((resolve, reject) => {
    ddbClient.update(voteParams, (error, data) => {
      error ? reject(error) : resolve(data)
    })
  })
}
