const router = require('express').Router()
const { addUser } = require('../controllers')

router.post('/add', addUser)

module.exports = router
