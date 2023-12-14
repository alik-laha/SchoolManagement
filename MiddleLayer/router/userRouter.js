const express = require('express')
const router = express.Router()
const { Login, Create, SearcheData, SendData } = require('../controller/userController')

//login user
router.post('/login', Login)

//create user
router.post('/create', Create)

//search user
router.post('/search', SearcheData)

//get all user
router.put('/getall', SendData)

module.exports = router