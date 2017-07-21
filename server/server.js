const express = require('express')
const dotenv = require('dotenv')
const { emojify } = require('node-emoji')
const middlewares = require('./middlewares')
dotenv.load()

const app = express()
app.use(middlewares)

app.listen(1337, console.log(emojify(
  '\n:fire:  :fire:   nomming at 1337   :fire:  :fire:\n'
  ))
)
