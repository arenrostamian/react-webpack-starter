const express = require('express')
const compress = require('compression')
const path = require('path')

const app = express()

app.use(compress())

app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(1337, function () {
  console.log(`nomming at 1337, nomomsayin?`)
})
