const express = require('express')
const router = express.Router()
const verifyToken = require('../Config/auth')
const {createFaculty, DeleteFaculty,UpdateFaculty,GetAllFaculty,createSubject, GetAllSubject,DeleteSubject,DeleteInternalExam,GetAllInternalExam,GetAllExternalExam,DeleteExternalExam,GetAllFacultyMiddleLayer,
    CreateExam,CreateMarks,
    MarksSearch,
    UpdateMarks,
    GetAllMarks,
    GetAllExamForMarks,
    GetFaculty,
    GetMarksWithoutSubject,
    GetMarksForEdit,
    DeleteMarks,MarksEntry,MarksEntryForStudentS,
    getStudentByClassYearAndSectio
} = require('../controller/FacultyController')

//create faculty
router.post('/createfaculty',verifyToken,createFaculty)

//delete faculty
router.post('/deletefaculty',verifyToken,DeleteFaculty)

//update faculty
router.post('/updatefaculty',verifyToken,UpdateFaculty)

//get all faculty
router.post('/getallfaculty',verifyToken,GetAllFaculty)

//create subject
router.post('/createsubject',verifyToken,createSubject)

//get all subject
router.get('/getallsubject',verifyToken,GetAllSubject)

//delete subject
router.post('/deletesubject',verifyToken,DeleteSubject)

//get all internal exam
router.get('/getallinternalexam',verifyToken,GetAllInternalExam)

//delete internal exam
router.post('/deleteinternalexam',verifyToken,DeleteInternalExam)

//create external exam
router.post('/createexam',verifyToken,CreateExam)

//get all external exam
router.get('/getallexternalexam',verifyToken,GetAllExternalExam)

//delete external exam
router.post('/deleteexternalexam',verifyToken,DeleteExternalExam)

//Create Marks
router.post('/createmarks',verifyToken,CreateMarks)

//search Marks for update
router.post('/searchmarks',MarksSearch)

//Update Marks
router.post('/updatemarks',verifyToken,UpdateMarks)

//get all Marks
router.post("/getallmarks",GetAllMarks)

//Update Marks
router.post('/getallfacultyactive',verifyToken,GetAllFacultyMiddleLayer)

//Get all Exam
router.get('/getallexam',verifyToken,GetAllExamForMarks)

//Get Faculty For Frontend
router.get('/getfaculty',verifyToken,GetFaculty)

// //get marks without subject
router.post('/getmarkswithoutsub',GetMarksWithoutSubject)


//get all Marks for edit
router.post("/getallmarksforedit",GetMarksForEdit)


//Delete Marks
router.post('/deletemarks',verifyToken,DeleteMarks)

//Marks entry
router.post('/marksentry',verifyToken,MarksEntry)

//Marks Entry For Exam
router.post('/marksentryforStudentexam',verifyToken,MarksEntryForStudentS)

//Get student by class and section and year
router.post('/getstudentbyclass',verifyToken,getStudentByClassYearAndSectio)



module.exports = router