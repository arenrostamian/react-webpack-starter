const router = require('express').Router()
const { addUser } = require('../controllers/users')

router.post('/add', addUser)

module.exports = router
