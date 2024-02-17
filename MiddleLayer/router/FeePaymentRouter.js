const express = require('express')
const router = express.Router()
const { CreateFeeStructure,GetFeeStructure ,EditFeeStructure} = require('../controller/FeePaymentController')


//Create a new Fee Structure
router.post('/createfeestructure', CreateFeeStructure)

//Get Fee Structure
router.post('/getfeestructure', GetFeeStructure)

//Edit Fee Structure
router.post('/editfeestructure', EditFeeStructure)




module.exports = router