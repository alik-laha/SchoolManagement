const express = require('express');
const router = express.Router();
const {GetAllStudent,MasterStudentAdmission, LastId} = require('../controller/StudentController')

//get all students
router.post('/getallstudent',GetAllStudent)

//Master student admission
router.post('/masterstudentadmission',MasterStudentAdmission)

//last id
router .get('/lastid',LastId)


module.exports = router