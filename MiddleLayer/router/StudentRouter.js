const express = require('express');
const router = express.Router();
const {GetAllStudent} = require('../controller/StudentController')

//get all students
router.post('/getallstudent',GetAllStudent)
//


module.exports = router