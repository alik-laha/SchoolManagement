const express = require('express')
const router = express.Router()
const{CreateBed, GetBed,DeleteBed,UpdateBed,GetRoomNo,GetHostelEntry,CreateHostelEntry,DeleteHostelEntry}=require('../controller/HostelControl')

//create bed
router.post('/createbed',CreateBed)

//view Bed
router.post('/searchBed',GetBed)

//update bed
router.post('/updateBed',UpdateBed)

//delete bed
router.post('/deleteBed',DeleteBed)

//get room no
router.get('/getroomno',GetRoomNo)

//get hostel entrie view
router.post('/gethostelentry',GetHostelEntry)

//create hostel entry
router.post('/createhostelentry',CreateHostelEntry)

//delete hostel entry
router.post('/deletehostelentry',DeleteHostelEntry)


module.exports = router