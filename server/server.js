const express = require('express')
const path = require('path')

const DIST_DIR = path.join(__dirname, '../client/dist')

const app = express()

express.static(DIST_DIR)

app.get('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, '/index.html'))
})

app.listen(1337, console.log('listening on port 1337 yo!'))
