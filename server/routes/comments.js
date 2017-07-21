const router = require('express').Router()
const { addComment, updateCommentScore } = require('../controllers')

router.post('/add', addComment)
router.post('/score', updateCommentScore)

module.exports = router
