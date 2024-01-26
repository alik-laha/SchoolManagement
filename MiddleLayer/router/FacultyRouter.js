const express = require('express')
const router = express.Router()
const {createFaculty} = require('../controller/FacultyController')

router.post('/createfaculty',createFaculty)




module.exports = router