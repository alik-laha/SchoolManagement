const express = require('express')
const router = express.Router()
const verifyToken = require('../Config/auth')
const { Login, CreateUser, SearchUser, UpdateUser, DeleteUser, CreateUserRole, GetUserRole, DeleteNotice, DeleteActiveNotice} = require('../controller/userController')
const multer=require('multer')
//const activemulter=require('multer')
const fs = require('fs');
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const path = require('path');
router.use(bodyParser.urlencoded({ extended: true }))

const directoryPath ='./student';
const directoryactiveNoticePath ='../StudentNotice';
const moment = require('moment');
const date = moment();
const formattedDate = date.format('DD-MM-YYYY');

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

        //console.log("this is the status"+req.body.status.toString())
        //if (req.body.status==true)
        //{
            //return cb(null,"./activeNotice")
        //}
        //else
        //{

            return cb(null,"./student")
       // }
        
    },
    filename:function (req,file,cb){

        return cb(null,file.originalname+"-"+formattedDate)
    }
})
const upload=multer({storage})


//upload student notice
router.post('/studentnotice',upload.single('file'),(req,res)=>{
    console.log("alik body",req.body)
    console.log( "main status",req.body.status)
})
router.get('/download', function(req, res){
    const file =path.join( './student', req.query.filename);
    res.download(file); // Set disposition and send it.
});

//login user
router.post('/login', Login)

// create user
router.post('/createuser',verifyToken, CreateUser)

//search user
router.post('/searchuser',verifyToken, SearchUser)


//update user
router.post('/updateuser',verifyToken, UpdateUser)

//delete user
router.post('/deleteuser',verifyToken, DeleteUser)

//create role
router.post('/createrole',verifyToken, CreateUserRole)

//get all role
router.get('/getallrole',verifyToken, GetUserRole)

//delete Notice
router.post('/deletenotice',DeleteNotice )

//delete active Notice
router.post('/deleteactivenotice',verifyToken,DeleteActiveNotice )


module.exports = router