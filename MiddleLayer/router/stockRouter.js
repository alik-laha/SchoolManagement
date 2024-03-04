const express = require('express')
const {CreateItem, GetItem, CreateVendor, GetVendor,ModifyStock,StockEntry,DeleteVendor, DeleteItem,GetStock,GetSecondaryStockEntry,UpdateSecondaryStockEntry,
    CreateItemName,
    GetItemName,GetItemNameByType,
    DeleteItemName,
    CreateStockUsage,GetPosativeAndNegetiveStockSum,GetStockUsage,GetMinusStockUsage
} = require("../controller/StockController");
const verifyToken = require('../Config/auth')
const router = express.Router()

//create item
router.post('/createitem',verifyToken,CreateItem)

//get all item
router.get('/getallitem',verifyToken,GetItem)

//create vendor
router.post('/createvendor',verifyToken,CreateVendor)

//get all vendor
router.get('/getallvendor',verifyToken,GetVendor)

//stock entry
router.post('/stockentry',verifyToken,StockEntry)

//get stock by search or all
router.post('/getstock',verifyToken,GetStock)

//delete vendor
router.post('/deletevendor',verifyToken,DeleteVendor)

//delete item
router.post('/deleteitem',verifyToken,DeleteItem)

//get secondary stock entry list
router.post('/getsecondarystockentry',verifyToken,GetSecondaryStockEntry)

//update secondary stock entry list
router.post('/updatecashentry',verifyToken,UpdateSecondaryStockEntry)

//modify stock entry
router.post('/modifystockentry',verifyToken,ModifyStock)

//Cretate Item Name
router.post('/createitemname',verifyToken,CreateItemName)

//get all item name
router.get('/getallitemname',verifyToken,GetItemName)

//get item name by item type
router.post('/getitemnamebytype',verifyToken,GetItemNameByType)

//delete item name
router.post('/deleteitemname',verifyToken,DeleteItemName)

//Entry Stock Usage
router.post('/entrystockusage',verifyToken,CreateStockUsage)

//get Plus Stock and Minus Stock
router.post('/getplusminusstock',verifyToken,GetPosativeAndNegetiveStockSum)

//Get Stock Usage
router.post('/getallstockusages',verifyToken,GetStockUsage)

//Get minus stock usage for Edit
router.post('/getminusstockusage',verifyToken,GetMinusStockUsage)

module.exports = router