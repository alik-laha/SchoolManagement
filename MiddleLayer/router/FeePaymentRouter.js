const express = require('express')
const router = express.Router()
const { CreateFeeStructure,GetFeeStructure ,EditFeeStructure,GetStudentForFeeEntry} = require('../controller/FeePaymentController')


//Create a new Fee Structure
router.post('/createfeestructure', CreateFeeStructure)

//Get Fee Structure
router.post('/getfeestructure', GetFeeStructure)

//Edit Fee Structure
router.post('/editfeestructure', EditFeeStructure)

//get student for fee payment entry
router.post('/getstudentforfeeEntry', GetStudentForFeeEntry)



module.exports = router