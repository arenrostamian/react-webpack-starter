const express = require('express')
const usersRouter = require('./routes/users')
const packagesRouter = require('./routes/packages')
const commentsRouter = require('./routes/comments')
const compress = require('compression')
const bodyParser = require('body-parser')
const path = require('path')
const dotenv = require('dotenv')
const { emojify } = require('node-emoji')
const DIST_DIR = path.join(__dirname, '../client/dist')

dotenv.load()

const app = express()

app.use(compress())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(DIST_DIR))

/**
 * routes
 */
app.use(usersRouter)
app.use(packagesRouter)
app.use(commentsRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, '/index.html'))
})

app.listen(1337, () => {
  console.log(emojify('\n:fire:  :fire:  :fire:   nomming at 1337  :fire:  :fire:  :fire:\n'))
})
