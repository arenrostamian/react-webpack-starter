const express = require('express')
const compress = require('compression')
const bodyParser = require('body-parser')
const path = require('path')
const DIST_DIR = path.join(__dirname, '../client/dist')
const routerMiddleware = require('./routes')

module.exports = [
  express.static(DIST_DIR),
  bodyParser.urlencoded({extended: true}),
  compress(),
  routerMiddleware
]
