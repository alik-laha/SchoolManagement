const express = require('express')
const router = express.Router()
const{CreateBed}=require('../controller/HostelControl')

//create bed
router.post('/createbed',CreateBed)


module.exports = router