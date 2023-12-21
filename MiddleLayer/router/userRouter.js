const express = require('express')
const router = express.Router()
const { Login, CreateUser, SearchUser, SendData, UpdateUser, DeleteUser, CreateUserRole, GetUserRole, DeleteNotice} = require('../controller/userController')
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

// create user
router.post('/createuser', CreateUser)

//search user
router.post('/searchuser', SearchUser)


//update user
router.post('/updateuser', UpdateUser)

//delete user
router.post('/deleteuser', DeleteUser)

//create role
router.post('/createrole', CreateUserRole)

//get all role
router.get('/getallrole', GetUserRole)


//delete Notice
router.post('/deletenotice',DeleteNotice )




module.exports = router