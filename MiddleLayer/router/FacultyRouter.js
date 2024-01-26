const express = require('express')
const router = express.Router()
const {createFaculty, DeleteFaculty,UpdateFaculty,GetAllFaculty} = require('../controller/FacultyController')

//create faculty
router.post('/createfaculty',createFaculty)

//delete faculty
router.post('/deletefaculty',DeleteFaculty)

//update faculty
router.post('/updatefaculty',UpdateFaculty)

//get all faculty
router.get('/getallfaculty',GetAllFaculty)


module.exports = router