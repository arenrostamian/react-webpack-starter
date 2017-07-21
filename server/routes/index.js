const router = require('express').Router()
const path = require('path')
const DIST_DIR = path.join(__dirname, '../client/dist')
const usersRouter = require('./users')
const packagesRouter = require('./packages')
const commentsRouter = require('./comments')

/**
 * creating routing middleware
 */

router.get('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, '/index.html'))
})
router.use('/user', usersRouter)
router.use('/package', packagesRouter)
router.use('/comment', commentsRouter)

module.exports = router
