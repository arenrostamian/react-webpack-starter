const { Comment } = require('../models')

exports.addComment = (req, res) => {
  const { packageName, username, text, timestamp } = req.query
  /* * db things * */
  res.sendStatus(201)
}

exports.updateCommentScore = (req, res) => {
  const { commentID, vote } = req.query
  /* * db things * */
  res.sendStatus(201)
}
