// const { writeSQL } = require('./sql/sqlUtils')

const express = require('express')
// const compress = require('compression')
const bodyParser = require('body-parser')
const path = require('path')
const webpack = require('webpack')

const webpackConfig = require('../webpack.config')
const compiler = webpack(webpackConfig)

const app = express()

// app.use(compress())
app.use(bodyParser.json())

// app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}))

app.use(express.static(path.join(__dirname, '../client/dist')))

// app.post('/writeSQL', (req, res) => {
//   const { name } = req.body
//   writeSQL(name)
// })

app.listen(1337, () => {
  console.log(`nomming at 1337, nomomsayin?`)
})
