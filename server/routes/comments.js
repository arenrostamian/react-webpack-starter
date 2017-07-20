const router = require('express').Router()
const { addComment, updateCommentScore } = require('../controllers/comments')

router.post('/comments/add', addComment)
router.post('/comments/score', updateCommentScore)

module.exports = router
