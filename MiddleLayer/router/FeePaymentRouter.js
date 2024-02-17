const express = require('express')
const router = express.Router()
const { CreateFeeStructure,GetFeeStructure } = require('../controller/FeePaymentController')


//Create a new Fee Structure
router.post('/createfeestructure', CreateFeeStructure)

//Get Fee Structure
router.post('/getfeestructure', GetFeeStructure)




module.exports = router