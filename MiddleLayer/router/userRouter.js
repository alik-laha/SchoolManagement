const express = require('express')
const router = express.Router()
const { Login, Create, SearcheData, SendData, UpdateUser, DeleteUser, CreateRole, GetRole } = require('../controller/userController')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})

const upload = multer({ storage: storage })

router.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file)
    res.send('single file upload success')
}
)
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