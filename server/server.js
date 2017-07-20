const express = require('express')
const compress = require('compression')
const bodyParser = require('body-parser')
const path = require('path')
const dotenv = require('dotenv')
const { emojify } = require('node-emoji')
const DIST_DIR = path.join(__dirname, '../client/dist')

const { indexRouter, usersRouter, packagesRouter, commentsRouter } = require('./routes')

dotenv.load()

const app = express()

app.use(compress())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(DIST_DIR))

/**
 * routes
 */
app.use('/', indexRouter)
app.use('/user', usersRouter)
app.use('/package', packagesRouter)
app.use('comment', commentsRouter)

app.listen(1337, () => {
  console.log(emojify('\n:fire:  :fire:  :fire:   nomming at 1337  :fire:  :fire:  :fire:\n'))
})
