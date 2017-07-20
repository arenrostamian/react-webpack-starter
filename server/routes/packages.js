const router = require('express').Router()
const { addPackage, getPackage, updatePackage } = require('../controllers/packages')

router.post('/packages/add', addPackage)
router.get('/packages/get', getPackage)
router.post('/packages/update', updatePackage)

module.exports = router
