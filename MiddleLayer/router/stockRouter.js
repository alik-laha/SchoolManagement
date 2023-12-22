const express = require('express')
const {CreateItem, GetItem, CreateVendor, GetVendor,StockEntry} = require("../controller/StockController");
const router = express.Router()

//create item
router.post('/createitem',CreateItem)

//get all item
router.post('/getallitem',GetItem)

//create vendor
router.post('/createvendor',CreateVendor)

//get all vendor
router.post('/getallvendor',GetVendor)

//stock entry
router.post('/stockentry',StockEntry)


module.exports = router