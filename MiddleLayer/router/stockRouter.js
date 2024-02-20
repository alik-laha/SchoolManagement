const express = require('express')
const {CreateItem, GetItem, CreateVendor, GetVendor,ModifyStock,StockEntry,DeleteVendor, DeleteItem,GetStock,GetSecondaryStockEntry,UpdateSecondaryStockEntry,
    CreateItemName,
    GetItemName,GetItemNameByType,
    DeleteItemName,
    CreateStockUsage
} = require("../controller/StockController");
const verifyToken = require('../Config/auth')
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

//get stock by search or all
router.post('/getstock',GetStock)

//delete vendor
router.post('/deletevendor',DeleteVendor)

//delete item
router.post('/deleteitem',DeleteItem)

//get secondary stock entry list
router.post('/getsecondarystockentry',GetSecondaryStockEntry)

//update secondary stock entry list
router.post('/updatecashentry',UpdateSecondaryStockEntry)

//modify stock entry
router.post('/modifystockentry',ModifyStock)

//Cretate Item Name
router.post('/createitemname',CreateItemName)

//get all item name
router.get('/getallitemname',GetItemName)

//get item name by item type
router.post('/getitemnamebytype',GetItemNameByType)

//delete item name
router.post('/deleteitemname',DeleteItemName)

//Entry Stock Usage
router.post('/entrystockusage',CreateStockUsage)

module.exports = router