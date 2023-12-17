const express = require('express');
const app = express();
const cors = require('cors')


app.use(cors())
app.use(express.json());

const user = require("./router/userRouter")
const stock =require("./router/stockRouter")
// route import
app.use('/api/v1', user)
app.use('/api/v1/stock',stock)


module.exports = app