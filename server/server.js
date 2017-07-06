// const { writeSQL } = require('./sql/sqlUtils')

const express = require('express')
const compress = require('compression')
const bodyParser = require('body-parser')
const path = require('path')

/* * Webpack * */
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const compiler = webpack(webpackConfig)

const app = express()

app.use(compress())
app.use(bodyParser.json())

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(1337, () => {
  console.log(`nomming at 1337, nomomsayin?`)
})

// app.post('/writeSQL', (req, res) => {
//   const { name } = req.body
//   writeSQL(name)
// })
