const express = require('express')
const {CreateItem, GetItem, CreateVendor, GetVendor} = require("../controller/StockController");
const router = express.Router()

//create item
router.post('/createitem',CreateItem)

//get all item
router.get('/getallitem',GetItem)

//create vendor
router.post('/createvendor',CreateVendor)

//get all vendor
router.get('/getallvendor',GetVendor)


module.exports = router