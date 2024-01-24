const express = require('express');
const router = express.Router();
const {GetAllStudent,MasterStudentAdmission, LastId,GetMasterStudentAdmisson,StudentAdmission} = require('../controller/StudentController')

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

module.exports = router