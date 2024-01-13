const express = require('express');
const app = express();
const cors = require('cors')


app.use(cors())
app.use(express.json());

const user = require("./router/userRouter")
const stock =require("./router/stockRouter")
const hostel = require("./router/HostelRouter")
// route import
app.use('/api/v1', user)
app.use('/api/v1/stock',stock)
app.use('/api/v1/hostel',hostel)


module.exports = app