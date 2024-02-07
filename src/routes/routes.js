const express = require('express')
const router = express.Router()
const {options}= require('../controller/controller')
router.use(express.json())

router.get('/generaRfc',options.test)

module.exports = router