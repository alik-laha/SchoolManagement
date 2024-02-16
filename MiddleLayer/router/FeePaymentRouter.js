const express = require('express')
const router = express.Router()
const { CreateFeeStructure } = require('../controller/FeePaymentController')


//Create a new Fee Structure
router.post('/createfeestructure', CreateFeeStructure)




module.exports = router