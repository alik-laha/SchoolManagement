const express = require('express');
const app = express();
const cors = require('cors')


app.use(cors())
app.use(express.json());

const user = require("./router/userRouter")
// route import
app.use('/api/v1', user)

module.exports = app