const express = require('express')
const router = express.Router()
const { Login, Create } = require('../controller/userController')

router.post('/login', Login)

router.post('/create', Create)


module.exports = router