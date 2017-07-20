const router = require('express').Router()
const path = require('path')
const DIST_DIR = path.join(__dirname, '../client/dist')

router.get('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, '/index.html'))
})

module.exports = {
  indexRouter: router,
  usersRouter: require('./users'),
  packagesRouter: require('./packages'),
  commentsRouter: require('./comments')
}
