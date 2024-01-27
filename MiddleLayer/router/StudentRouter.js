const express = require('express');
const router = express.Router();
const {GetAllStudent,MasterStudentAdmission, LastId,GetMasterStudentAdmisson,StudentAdmission, UpdateStudentAdmission,
    DeleteStudentAdmission, DeleteMasterStudentAdmission
} = require('../controller/StudentController')

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

module.exports = router