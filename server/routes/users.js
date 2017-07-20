const router = require('express').Router()
const { addUser } = require('../controllers/users')

router.post('/user/add', addUser)

module.exports = router
