const express = require('express')
const compress = require('compression')
const bodyParser = require('body-parser')
const path = require('path')
const dotenv = require('dotenv')
const { emojify } = require('node-emoji')
const DIST_DIR = path.join(__dirname, '../client/dist')
/* * import addPackage, getPackage, updatePackage, updateCommentScore from dbUtils * */
/* * dotenv.load() must stay above everything * */
dotenv.load()

const { db, successMsg, errorMsg } = require('../mongoDB/dbClient')
const { UserModel } = require('../mongoDB/models/user')
const app = express()

db.once('open', () => console.log(successMsg))
db.on('error', () => console.log(errorMsg))

app.use(compress())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(DIST_DIR))

app.post('/add-user', (req, res) => {
  let { authID, username } = req.body

  new UserModel({ authID, username })
      .save((err) => {
        if (err) throw err
        res.sendStatus(201)
        console.log('Posted successfully')
      })
      .catch(err => console.log(err))
})

app.post('/add-package', () => console.log('addPackage'))
app.get('/get-package', () => console.log('getPackage'))
app.post('/update-package', () => console.log('updatePackage'))
app.post('update-comment-score', () => console.log('updateCommentScore'))

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, '/index.html'))
})

app.listen(1337, () => {
  console.log(emojify('\n:fire:  :fire:  :fire:   nomming at 1337  :fire:  :fire:  :fire:\n'))
})
