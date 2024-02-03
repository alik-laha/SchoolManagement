const express = require('express')
const router = express.Router()
const{CreateBed, GetBed,DeleteBed,UpdateBed,GetRoomNo,GetHostelEntry,CreateHostelEntry,DeleteHostelEntry,DeleteHostelEntryByRegNo,UpdateHostelEntry,GetAllCombinedHostelStudent}=require('../controller/HostelController')

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

//delete hostel entry by rgestration no
router.post('/deletehostelentrybyregno',DeleteHostelEntryByRegNo)

//delete hostel entry
router.post('/deletehostelentry',DeleteHostelEntry)

//update hostel entry
router.post('/updatehostelentry',UpdateHostelEntry)

//search left join hostel entry
router.post('/getAllCombinedHostelStudent',GetAllCombinedHostelStudent)

module.exports = router