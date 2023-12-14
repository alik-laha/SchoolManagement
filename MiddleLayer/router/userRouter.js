const express = require('express')
const router = express.Router()
const { Login, Create, SearcheData, SendData, UpdateUser, DeleteUser } = require('../controller/userController')

//login user
router.post('/login', Login)

//create user
router.post('/create', Create)

//search user
router.post('/search', SearcheData)

//get all user
router.put('/getall', SendData)

//update user
router.post('/update', UpdateUser)

//delete user
router.post('/delete', DeleteUser)

module.exports = router