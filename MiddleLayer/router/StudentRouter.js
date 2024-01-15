const express = require('express');
const router = express.Router();
const {GetAllStudent} = require('../controller/StudentControl')

//get all students
router.get('/getallstudent',GetAllStudent)

module.exports = router