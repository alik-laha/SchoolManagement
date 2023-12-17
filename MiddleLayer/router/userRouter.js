const express = require('express')
const router = express.Router()
const { Login, Create, SearcheData, SendData, UpdateUser, DeleteUser, CreateRole, GetRole } = require('../controller/userController')
const multer=require('multer')

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,"./student")
    },
    filename:function (req,file,cb){
        return cb(null,`${Date.now()}_${file.originalname}`)
    }
})
const upload=multer({storage})

//upload student notice
router.post('/studentnotice',upload.single('file'),(req,res)=>{
    console.log(req.body)
    console.log(req.file)
})

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
router.get('/getallrole', GetRole)





module.exports = router