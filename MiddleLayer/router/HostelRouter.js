const express = require('express')
const router = express.Router()
const{CreateBed, GetBed,DeleteBed}=require('../controller/HostelControl')

//create bed
router.post('/createbed',CreateBed)

//view Bed
router.post('/searchBed',GetBed)

//update bed


//delete bed
router.post('/deleteBed',DeleteBed)


module.exports = router