const express = require('express')
const compress = require('compression')
const bodyParser = require('body-parser')
const path = require('path')
const DIST_DIR = path.join(__dirname, '../client/dist')

const app = express()

app.use(compress())
app.use(bodyParser.json())
app.use(express.static(DIST_DIR))

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, '/index.html'))
})

app.listen(1337, () => {
  console.log(`nomming at 1337, nomomsayin?`)
})
