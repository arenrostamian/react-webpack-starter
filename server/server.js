const express = require('express')
const compress = require('compression')
const bodyParser = require('body-parser')
const path = require('path')
const dotenv = require('dotenv')
const { addPackage, getPackage, updatePackage } = require('./serverUtils')
const { ddbAddUser } = require('./serverUtils')
const DIST_DIR = path.join(__dirname, '../client/dist')

dotenv.load()
const app = express()

app.use(compress())
app.use(bodyParser.json())
app.use(express.static(DIST_DIR))

app.post('/add-package', addPackage)
app.get('/get-package', getPackage)
app.post('/update-package', updatePackage)

app.post('/add-user', ddbAddUser)

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, '/index.html'))
})

app.listen(1337, () => console.log(`nomming at 1337, nomomsayin?`))
