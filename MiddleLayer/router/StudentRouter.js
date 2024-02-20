const express = require('express');
const router = express.Router();
const verifyToken = require('../Config/auth')
const {GetAllStudent,MasterStudentAdmission, LastId,GetMasterStudentAdmisson,StudentAdmission, UpdateStudentAdmission,
    DeleteStudentAdmission, DeleteMasterStudentAdmission, UpdateMasterStudentAdmission,GetPromoteStudentAdmisson,updateNextClass,
    CheckPromote,GetAllRegistration,PromoteFail,ReadmitStudent,GetMasterStudentAdmissonByactivity} = require('../controller/StudentController')

//get all students
router.post('/getallstudent',verifyToken,GetAllStudent)

//Master student admission
router.post('/masterstudentadmission',verifyToken,MasterStudentAdmission)

//last id
router .get('/lastid',verifyToken,LastId)

//get Master student admission
router.post('/getmasterstudent',verifyToken,GetMasterStudentAdmisson)

//student admission entry
router.post('/studentadmission',verifyToken,StudentAdmission)

//roll no and section update
router.post('/academecentry',verifyToken,UpdateStudentAdmission)

//delete student from master
router.post('/deletemasterstudent',verifyToken,DeleteMasterStudentAdmission)

//delete student from student admission
router.post('/deletestudent',verifyToken,DeleteStudentAdmission)

//update student admission
router.post('/updatestudent',verifyToken,UpdateMasterStudentAdmission)

//promote next search
router.post('/getpromotesearch',verifyToken,GetPromoteStudentAdmisson)

//update promotion
router.post('/updatepromotion',verifyToken,updateNextClass)

//get count of students
router.post('/getcount',verifyToken,CheckPromote)

//Promote Fail Student
router.post('/promotefail',verifyToken,PromoteFail)


//get count of students
router.post('/getallregNo',verifyToken,GetAllRegistration)

//Readmit Student
router.post('/readmitstudent',verifyToken,ReadmitStudent)

//get student by active status
router.post('/getstudentbyactive',verifyToken,GetMasterStudentAdmissonByactivity)

module.exports = router