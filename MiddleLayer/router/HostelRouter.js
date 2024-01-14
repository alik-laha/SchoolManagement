const express = require('express')
const router = express.Router()
const{CreateBed, GetBed}=require('../controller/HostelControl')

//create bed
router.post('/createbed',CreateBed)

//view Bed
router.post('/searchBed',GetBed)


module.exports = router