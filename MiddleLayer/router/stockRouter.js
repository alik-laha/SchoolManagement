const express = require('express')
const {CreateItem, GetItem, CreateVendor, GetVendor,StockEntry,GetStock,DeleteVendor, DeleteItem} = require("../controller/StockController");
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

//get all stock
router.post('/getstock',GetStock)

//delete vendor
router.post('/deletevendor',DeleteVendor)

//delete item
router.post('/deleteitem',DeleteItem)


module.exports = router