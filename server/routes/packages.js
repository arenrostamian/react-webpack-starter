const router = require('express').Router()
const { addPackage, getPackage, updatePackage } = require('../controllers/packages')

router.post('/add', addPackage)
router.get('/get', getPackage)
router.post('/update', updatePackage)

module.exports = router
