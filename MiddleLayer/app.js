const express = require('express');
const app = express();
const cors = require('cors')


app.use(cors())
app.use(express.json());

const user = require("./router/userRouter")
const stock =require("./router/stockRouter")
const hostel = require("./router/HostelRouter")
const student = require("./router/StudentRouter")
const faculty = require("./router/FacultyRouter")
const fee = require("./router/FeePaymentRouter")
// route import
app.use('/api/v1', user)
app.use('/api/v1/stock',stock)
app.use('/api/v1/hostel',hostel)
app.use('/api/v1/student',student)
app.use('/api/v1/faculty',faculty)
app.use('/api/v1/fee',fee)


module.exports = app