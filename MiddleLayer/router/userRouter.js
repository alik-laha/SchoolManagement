const express = require('express')
const router = express.Router()
const { Login, Create, SearcheData, SendData, UpdateUser, DeleteUser, CreateRole, GetRole, DeleteNotice} = require('../controller/userController')
const multer=require('multer')
const fs = require('fs');

const directoryPath ='./student';

router.get('/allfiles', (req, res) => {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(404).send('Error reading files.',err);
        }
        res.json({ files });
    });
});

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,"./student")
    },
    filename:function (req,file,cb){

        return cb(null,file.originalname)
    }
})
const upload=multer({storage})

//upload student notice
router.post('/studentnotice',upload.single('file'),(req,res)=>{
    console.log(req.body)
    console.log(req.form)
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


//delete Notice
router.post('/deletenotice',DeleteNotice )




module.exports = router