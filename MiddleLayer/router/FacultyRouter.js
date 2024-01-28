const express = require('express')
const router = express.Router()
const {createFaculty, DeleteFaculty,UpdateFaculty,GetAllFaculty,createSubject, GetAllSubject,DeleteSubject,DeleteInternalExam,GetAllInternalExam,createInternalExam,createExternalExam,GetAllExternalExam,DeleteExternalExam} = require('../controller/FacultyController')

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

//create internal exam
router.post('/createinternalexam',createInternalExam)

//get all internal exam
router.post('/getallinternalexam',GetAllInternalExam)

//delete internal exam
router.post('/deleteinternalexam',DeleteInternalExam)

//create external exam
router.post('/createexternalexam',createExternalExam)

//get all external exam
router.post('/getallexternalexam',GetAllExternalExam)

//delete external exam
router.post('/deleteexternalexam',DeleteExternalExam)

module.exports = router