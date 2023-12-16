const express = require('express')
const router = express.Router()
const { Login, Create, SearcheData, SendData, UpdateUser, DeleteUser, CreateRole, GetRole } = require('../controller/userController')

//login user
router.post('/login', Login)

//create user
router.post('/create', Create)

//search user
router.post('/search', SearcheData)

//get all user
router.get('/getall', SendData)

//update user
router.post('/update', UpdateUser)

//delete user
router.post('/delete', DeleteUser)



//create role
router.post('/createrole', CreateRole)

//get all role
router.put('/getallrole', GetRole)



module.exports = router