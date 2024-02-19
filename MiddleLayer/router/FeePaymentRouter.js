const express = require('express')
const router = express.Router()
const verifyToken = require('../Config/auth')
const { CreateFeeStructure,GetFeeStructure ,EditFeeStructure,GetStudentForFeeEntry,NewAdmissionFeeEntry,ReAdmissionFeeEntry} = require('../controller/FeePaymentController')


//Create a new Fee Structure
router.post('/createfeestructure',CreateFeeStructure)

//Get Fee Structure
router.post('/getfeestructure' ,verifyToken, GetFeeStructure)

//Edit Fee Structure
router.post('/editfeestructure', EditFeeStructure)

//get student for fee payment entry
router.post('/getstudentforfeeEntry', GetStudentForFeeEntry)


//New admission fee Entry
router.post('/newadmissionfeeentry', NewAdmissionFeeEntry)

//Re Admission fee Entry
router.post('/readmissionfeeentry', ReAdmissionFeeEntry)



module.exports = router