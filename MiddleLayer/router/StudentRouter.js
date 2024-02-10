const express = require('express');
const router = express.Router();
const {GetAllStudent,MasterStudentAdmission, LastId,GetMasterStudentAdmisson,StudentAdmission, UpdateStudentAdmission,
    DeleteStudentAdmission, DeleteMasterStudentAdmission, UpdateMasterStudentAdmission,GetPromoteStudentAdmisson,updateNextClass,
    CheckPromote,GetAllRegistration,PromoteFail,ReadmitStudent} = require('../controller/StudentController')

//get all students
router.post('/getallstudent',GetAllStudent)

//Master student admission
router.post('/masterstudentadmission',MasterStudentAdmission)

//last id
router .get('/lastid',LastId)

//get Master student admission
router.post('/getmasterstudent',GetMasterStudentAdmisson)

//student admission entry
router.post('/studentadmission',StudentAdmission)

//roll no and section update
router.post('/academecentry',UpdateStudentAdmission)

//delete student from master
router.post('/deletemasterstudent',DeleteMasterStudentAdmission)

//delete student from student admission
router.post('/deletestudent',DeleteStudentAdmission)

//update student admission
router.post('/updatestudent',UpdateMasterStudentAdmission)

//promote next search
router.post('/getpromotesearch',GetPromoteStudentAdmisson)

//update promotion
router.post('/updatepromotion',updateNextClass)

//get count of students
router.post('/getcount',CheckPromote)

//Promote Fail Student
router.post('/promotefail',PromoteFail)


//get count of students
router.post('/getallregNo',GetAllRegistration)

//Readmit Student
router.post('/readmitstudent',ReadmitStudent)

module.exports = router