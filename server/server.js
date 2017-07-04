const { writeFirebase } = require('./base/baseUtils')

const express = require('express')
const compress = require('compression')
var bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(compress())
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../client/dist')))

app.post('/writeFirebase', (req, res) => {
  const { name } = req.body
  writeFirebase(name)
})

app.listen(1337, () => {
  console.log(`nomming at 1337, nomomsayin?`)
})
