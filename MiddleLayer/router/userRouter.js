const express = require('express')
const router = express.Router()
const { Login, CreateUser, SearchUser, UpdateUser, DeleteUser, CreateUserRole, GetUserRole, DeleteNotice, DeleteActiveNotice} = require('../controller/userController')
const multer=require('multer')
//const activemulter=require('multer')
const fs = require('fs');
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

const directoryPath ='./student';
const directoryactiveNoticePath ='./activeNotice';

router.get('/allfiles', (req, res) => {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(404).send('Error reading notice files.',err);
        }
        res.json({ files });
    });
});

router.get('/allactivefiles', (req, res) => {
    fs.readdir(directoryactiveNoticePath, (err, activefiles) => {
        if (err) {
            return res.status(404).send('Error reading active notice files.',err);
        }
        res.json({ activefiles });
    });
});



const storage=multer.diskStorage({
    destination:function(req,file,cb){
        console.log("this is the status"+req.body.status.toString())
        if (req.body.status==true)
        {
            return cb(null,"./activeNotice")
        }
        else
        {
            return cb(null,"./student")
        }
        
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

//delete active Notice
router.post('/deleteactivenotice',DeleteActiveNotice )


module.exports = router