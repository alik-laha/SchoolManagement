const express = require('express')
const router = express.Router()
const{CreateBed, GetBed}=require('../controller/HostelControl')

//create bed
router.post('/createbed',CreateBed)

//view Bed
router.get('/viewbed',GetBed)


module.exports = router