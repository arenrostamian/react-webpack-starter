const router = require('express').Router()
const { addPackage, getPackage, updatePackage } = require('../controllers')

router.post('/add', addPackage)
router.get('/get', getPackage)
router.post('/update', updatePackage)

module.exports = router
