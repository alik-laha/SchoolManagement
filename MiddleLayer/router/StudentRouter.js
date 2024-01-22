const express = require('express');
const router = express.Router();
const {GetAllStudent,MasterStudentAdmission} = require('../controller/StudentController')

//get all students
router.post('/getallstudent',GetAllStudent)

//Master student admission
router.post('/masterstudentadmission',MasterStudentAdmission)


module.exports = router