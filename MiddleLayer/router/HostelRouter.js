const express = require('express')
const router = express.Router()
const verifyToken = require('../Config/auth')
const{CreateBed, GetBed,DeleteBed,UpdateBed,GetRoomNo,GetHostelEntry,CreateHostelEntry,DeleteHostelEntry,DeleteHostelEntryByRegNo,UpdateHostelEntry,GetAllCombinedHostelStudent}=require('../controller/HostelController')

//create bed
router.post('/createbed',verifyToken,CreateBed)

//view Bed
router.post('/searchBed',verifyToken,GetBed)

//update bed
router.post('/updateBed',verifyToken,UpdateBed)

//delete bed
router.post('/deleteBed',verifyToken,DeleteBed)

//get room no
router.get('/getroomno',verifyToken,GetRoomNo)

//get hostel entrie view
router.post('/gethostelentry',verifyToken,GetHostelEntry)

//create hostel entry
router.post('/createhostelentry',verifyToken,CreateHostelEntry)

//delete hostel entry by rgestration no
router.post('/deletehostelentrybyregno',verifyToken,DeleteHostelEntryByRegNo)

//delete hostel entry
router.post('/deletehostelentry',verifyToken,DeleteHostelEntry)

//update hostel entry
router.post('/updatehostelentry',verifyToken,UpdateHostelEntry)

//search left join hostel entry
router.post('/getAllCombinedHostelStudent',verifyToken,GetAllCombinedHostelStudent)

module.exports = router