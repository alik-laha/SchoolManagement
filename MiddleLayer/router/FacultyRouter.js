const express = require('express')
const router = express.Router()
const {createFaculty, DeleteFaculty,UpdateFaculty,GetAllFaculty,createSubject, GetAllSubject,DeleteSubject,DeleteInternalExam,GetAllInternalExam,GetAllExternalExam,DeleteExternalExam,GetAllFacultyMiddleLayer,
    CreateExam,CreateMarks,
    MarksSearch,
    UpdateMarks,
    GetAllMarks
} = require('../controller/FacultyController')

//create faculty
router.post('/createfaculty',createFaculty)

//delete faculty
router.post('/deletefaculty',DeleteFaculty)

//update faculty
router.post('/updatefaculty',UpdateFaculty)

//get all faculty
router.post('/getallfaculty',GetAllFaculty)

//create subject
router.post('/createsubject',createSubject)

//get all subject
router.post('/getallsubject',GetAllSubject)

//delete subject
router.post('/deletesubject',DeleteSubject)

//get all internal exam
router.post('/getallinternalexam',GetAllInternalExam)

//delete internal exam
router.post('/deleteinternalexam',DeleteInternalExam)

//create external exam
router.post('/createexam',CreateExam)

//get all external exam
router.post('/getallexternalexam',GetAllExternalExam)

//delete external exam
router.post('/deleteexternalexam',DeleteExternalExam)

//Create Marks
router.post('/createmarks',CreateMarks)

//search Marks for update
router.post('/searchmarks',MarksSearch)

//Update Marks
router.post('/updatemarks',UpdateMarks)

//get all Marks
router.post("/getallmarks",GetAllMarks)

//Update Marks
router.post('/getallfacultyactive',GetAllFacultyMiddleLayer)

module.exports = router