const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const { emojify } = require('node-emoji')
const middlewares = require('./middlewares')
const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig.development)
const objection = require('objection')
const Model = objection.Model

dotenv.load()

Model.knex(knex)

const app = express()
app.use(middlewares)

app.listen(1337, console.log(emojify(
  '\n:fire:  :fire:   nomming at 1337   :fire:  :fire:\n'
  ))
)
