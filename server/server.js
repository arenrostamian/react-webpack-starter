const express = require('express')
const compress = require('compression')
const bodyParser = require('body-parser')
const path = require('path')
const dotenv = require('dotenv')
/* * import addPackage, getPackage, updatePackage, updateCommentScore from mongoose utils * */
const DIST_DIR = path.join(__dirname, '../client/dist')

dotenv.load()
const mongoDB = require('./mongoDB/mongoClient')
const app = express()
mongoDB()

app.use(compress())
app.use(bodyParser.json())
app.use(express.static(DIST_DIR))

app.post('/add-user', () => console.log('addUser'))

app.post('/add-package', () => console.log('addPackage'))
app.get('/get-package', () => console.log('getPackage'))
app.post('/update-package', () => console.log('updatePackage'))
app.post('update-comment-score', () => console.log('updateCommentScore'))

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, '/index.html'))
})

app.listen(1337, () => console.log(`nomming at 1337, nomomsayin?`))
