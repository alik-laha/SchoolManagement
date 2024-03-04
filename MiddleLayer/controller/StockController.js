const Database = require('../Config/Dbconnection')


//create Item
exports.CreateItem = (req, res) => {
    const { item } = req.body
    if (! item || item === " ") {
        return res.json({msg:"all data needed"})
    }
    query = `
                    INSERT INTO  itemType (item_Type)
                    VALUES ("${item}")`;
    Database.query(query, function (error, data) {
        if (error) {

            return res.status(400).json({
                status: "error at creating vendor",
                message: error
            });
        }
        if (data) {
            return res.status(200).json({
                status: "venodr created",
                data: data
            });
        }

    })
    }




//get all item
exports.GetItem = (req, res) => {
            query = `
                SELECT *
                FROM itemType ORDER BY type_id ASC`;
            Database.query(query, function (error, data) {
                if (error) {

                    return res.status(400).json({
                        status: "error at geting item",
                        message: error
                    });

                } else if (data) {

                    return res.status(200).json({
                        status: "got all item",
                        data: data
                    });
                }

            })
        }

//create vendor
exports.CreateVendor = (req, res) => {
    const { vendor,vendoraddress } = req.body

        if (! vendor || vendor === " ") {
            return res.json({msg:"all data needed"})
        }
                query = `
                    INSERT INTO vendor (vendor_name,vendor_address)
                    VALUES ("${vendor}","${vendoraddress}")`;
                Database.query(query, function (error, data) {
                    if (error) {

                        return res.status(400).json({
                            status: "error at creating vendor",
                            message: error
                        });
                    }
                    if (data) {
                        return res.status(200).json({
                            status: "venodr created",
                            data: data
                        });
                    }

                })

}

//get all vendor
exports.GetVendor = (req, res) => {
            query = `
                SELECT *
                FROM vendor ORDER BY vendor_id ASC`;
            Database.query(query, function (error, data) {
                if (error) {

                    return res.status(400).json({
                        status: "error at geting vendor",
                        message: error
                    });
                }
                if (data) {

                    return res.status(200).json({
                        status: "got all vendor",
                        data: data
                    });
                }

            })
}

//stock entry
exports.StockEntry=(req,res)=>{
    const {itemName,billNo,billDate,unitCost,quantity,itemType,vendorName,projectedCost, primaryEntryDate,modifiedDate }=req.body
    if(!itemName || !billNo || !billDate || !unitCost || !quantity || !itemType || !vendorName || !projectedCost){
        return res.status(400).json({
            status:"all data needed"
        })
    }
    else{
                query=`
                    INSERT INTO stock (item_Type,item_Name,vendor_name,bill_id,bill_date,unit_cost,quantity,projected_cost,primary_entry_date,stock_modified_date)
                    VALUES ("${itemType}","${itemName}","${vendorName}","${billNo}","${billDate}","${unitCost}","${quantity}","${projectedCost}","${primaryEntryDate}","${modifiedDate}")`;
                Database.query(query,function(error,data){
                    if(error){

                        return res.status(400).json({
                            status:"Bill No. Already Exists",
                            message:error
                        })
                    }
                    if(data){

                        return res.status(200).json({
                            status:"stock created",
                            data:data
                        })
                    }

                })
            }
        }

    //get primary stock from search
    exports.GetStock=(req,res)=>{

                const{itemType,fromDate,toDate,billId,vendorName}=req.body

                    if(billId && !itemType && !fromDate && !toDate && !vendorName){
                        query=`SELECT * FROM stock WHERE bill_id REGEXP "${billId}" ORDER BY bill_date DESC,bill_id ASC,item_Name ASC`
                    }
                    else if(itemType && !fromDate && !toDate && !vendorName){
                        query=`SELECT * FROM stock WHERE item_Type = "${itemType}" ORDER BY bill_date DESC,bill_id ASC,item_Name ASC`
                    }
                    else if(fromDate && toDate && !itemType  && !vendorName){
                        query=`SELECT * FROM stock WHERE bill_date BETWEEN "${fromDate}" AND "${toDate}" ORDER BY bill_date DESC,bill_id ASC,item_Name ASC`
                    }
                    else if(vendorName && !fromDate && !toDate  && !itemType){
                        query=`SELECT * FROM stock WHERE vendor_name="${vendorName}" ORDER BY bill_date DESC,bill_id ASC,item_Name ASC`
                    }



                    else if(itemType  && billId && !fromDate && !toDate  && !vendorName){
                        query=`SELECT * FROM stock WHERE item_Type = "${itemType}" AND bill_id REGEXP "${billId}" ORDER BY bill_date DESC,bill_id ASC,item_Name ASC`
                    }
                    else if(itemType && fromDate && toDate  && !vendorName && !billId){
                        query=`SELECT * FROM stock WHERE item_Type = "${itemType}" AND bill_date BETWEEN "${fromDate}" AND "${toDate}" ORDER BY bill_date DESC,bill_id ASC,item_Name ASC`
                    }
                    else if(itemType && vendorName && !fromDate && !toDate  && !billId){
                        query=`SELECT * FROM stock WHERE item_Type="${itemType}" AND vendor_name="${vendorName}" ORDER BY bill_date DESC,bill_id ASC,item_Name `
                    }
                    else if(fromDate && toDate && vendorName && !itemType && !billId){
                        query=`SELECT * FROM stock WHERE  vendor_name="${vendorName}" AND bill_date BETWEEN "${fromDate}" AND "${toDate}" ORDER BY bill_date DESC,bill_id ASC,item_Name ASC`
                    }
                    else if(!fromDate && !toDate && vendorName && !itemType && billId){
                        query=`SELECT * FROM stock WHERE  vendor_name="${vendorName}" AND bill_id REGEXP "${billId}" ORDER BY bill_date DESC,bill_id ASC,item_Name ASC`
                    }
                    else if(fromDate && toDate && !vendorName && !itemType && billId){
                        query=`SELECT * FROM stock WHERE  bill_id REGEXP "${billId}" AND bill_date BETWEEN "${fromDate}" AND "${toDate}" ORDER BY bill_date DESC,bill_id ASC,item_Name ASC`
                    }




                    else if(fromDate && toDate && vendorName && !itemType && billId){
                        query=`SELECT * FROM stock WHERE  bill_id REGEXP "${billId}" AND bill_date BETWEEN "${fromDate}" AND "${toDate}" AND vendor_name="${vendorName}" ORDER BY bill_date DESC,bill_id ASC,item_Name ASC`
                    }
                    else if(fromDate && toDate && !vendorName && itemType && billId){
                        query=`SELECT * FROM stock WHERE  bill_id REGEXP "${billId}" AND bill_date BETWEEN "${fromDate}" AND "${toDate}" AND item_Type="${itemType}" ORDER BY bill_date DESC,bill_id ASC,item_Name ASC`
                    }
                    else if(!fromDate && !toDate && vendorName && itemType && billId){
                        query=`SELECT * FROM stock WHERE  bill_id REGEXP "${billId}" AND vendor_name="${vendorName}" AND item_Type="${itemType}" ORDER BY bill_date DESC,bill_id ASC,item_Name ASC`
                    }
                    else if(fromDate && toDate && vendorName && itemType && !billId){
                        query=`SELECT * FROM stock WHERE vendor_name="${vendorName}" AND bill_date BETWEEN "${fromDate}" AND "${toDate}" AND item_Type="${itemType}" ORDER BY  bill_date DESC,bill_id ASC,item_Name ASC`
                    }



                    else if(itemType && fromDate && toDate && vendorName && billId){
                        query=`SELECT * FROM stock WHERE bill_id REGEXP "${billId}" AND item_Type="${itemType}" AND vendor_name="${vendorName}" AND bill_date BETWEEN "${fromDate}" AND "${toDate}" ORDER BY bill_date DESC,bill_id AS,item_Name ASC `
                    }
                    else{
                        query=`SELECT * FROM stock ORDER BY bill_date DESC,bill_id ASC,item_Name ASC`
                    }

                Database.query(query,function(error,data){
                    if(error){
                        return res.status(400).json({
                            status:"error at getting stock",
                            message:error
                        })
                    }
                    if(data){
                        return res.status(200).json({
                            status:"got all stock",
                            data:data
                        })
                    }

                })
}


//delete vendor
exports.DeleteVendor=(req,res)=>{
    const {vendorId}=req.body
    if(!vendorId){
        return res.status(400).json({
            status:"vendor id needed"
        })
    }
    else{
        let query=`DELETE FROM vendor WHERE vendor_id="${vendorId}"`
        Database.query(query,function(error,data){
            if(error){
                return res.status(400).json({
                    status:"error at deleting vendor",
                    message:error
                })
            }
            if(data){
                query=`select * from vendor`
                Database.query(query,function(error,data){
                    if(error){
                        return res.status(400).json({
                            status:"error at getting vendor",
                            message:error
                        })
                    }
                    if(data){
                        return res.status(200).json({
                            status:"vendor deleted",
                            data:data
                        })
                    }
                })
            }

        })
    }
}

//delete item
exports.DeleteItem=(req,res)=>{
    const {itemId}=req.body
    if(!itemId){
        return res.status(400).json({
            status:"item id needed"
        })
    }
    else{
      let query=`DELETE FROM itemType WHERE type_id="${itemId}"`
        Database.query(query,function(error,data){
            if(error){
                return res.status(400).json({
                    status:"error at deleting item",
                    message:error
                })
            }
            if(data){
                query=`select * from itemType`
                Database.query(query,function(error,data){
                    if(error){
                        return res.status(400).json({
                            status:"error at getting item",
                            message:error
                        })
                    }
                    if(data){
                        return res.status(200).json({
                            status:"item deleted",
                            data:data
                        })
                    }
                })
            }

        })
    }
}


// get secondary stock entry
exports.GetSecondaryStockEntry=(req,res)=>{

    const{fromDate,billId,toDate}=req.body

        if(billId  && !fromDate && !toDate){
            query=`SELECT * FROM stock WHERE bill_id REGEXP "${billId}" ORDER BY bill_date DESC,bill_id ASC,item_Name `
        }
       
        else if(fromDate && toDate && !billId ){
            query=`SELECT *
                   FROM stock
                   WHERE bill_date BETWEEN "${fromDate}" AND "${toDate}" ORDER BY bill_date DESC,bill_id ASC,item_Name `
        }
  
        else if(billId && fromDate && toDate){
            query=`SELECT *
                   FROM stock
                   WHERE bill_date BETWEEN "${fromDate}" AND "${toDate}" AND  bill_id REGEXP "${billId}" ORDER BY bill_date DESC,bill_id ASC,item_Name `
        }

        else{
            query=`SELECT * FROM stock ORDER BY bill_date DESC,bill_id ASC,item_Name`
        }

    Database.query(query,function(error,data){
        if(error){
            return res.status(400).json({
                status:"error at getting stock",
                message:fromDate,toDate
            })
        }
        if(data){
            return res.status(200).json({
                status:"got all stock",
                data:data
            })
        }

    })
}


// update secondary stock entry
exports.UpdateSecondaryStockEntry=(req,res)=>{

    const{itemid,paidamt,discountamt,balamt,cashentrydate,modifieddate}=req.body

        
    if (!{itemid,discountamt,balamt,cashentrydate,modifieddate}) {
        return res.message("all data needed")
    }
            query = `
                UPDATE stock
                SET paid_amount="${paidamt}",
                    discounted_cost="${discountamt}",
                    pending_amount="${balamt}",
                    stock_entry_date="${cashentrydate}",
                    stock_modified_date="${modifieddate}",cash_entry_flag=1
                WHERE stock_id = ${itemid}`;
                Database.query(query,function(error,data){
                    if(error){
                        return res.status(400).json({
                            status:"error at updating secondary cash entry of stock",
                            message:error
                        })
                    }
                    if(data){
                        return res.status(200).json({
                            status:"got all stock",
                            data:data
                        })
                    }
            
                })
}

//Modify Stock

exports.ModifyStock=(req,res)=>{
    const {stockid,itemName,billNo,billDate,quantity,itemType,vendorName,projectedCost, modifiedDate,discountCost,actualCost,unitCost ,pendingamount}=req.body
    if(!stockid || !itemName || !billNo || !billDate || !unitCost || !quantity || !itemType || !vendorName || !projectedCost || !modifiedDate  ){
        return res.status(400).json({
            status:"all primary entry data needed"
        })
    }
    else{

        if(!actualCost && !discountCost && !pendingamount)
        {
           
            query=`
                    UPDATE stock
                    SET item_Type="${itemType}",
                        item_Name="${itemName}",
                        item_Type="${itemType}",
                        vendor_name="${vendorName}",
                        bill_id="${billNo}",
                        bill_date="${billDate}",
                        unit_cost="${unitCost}",
                        quantity="${quantity}",
                        projected_cost="${projectedCost}",
                        stock_modified_date="${modifiedDate}"
                        
                    WHERE stock_id = ${stockid}`;
        
        }
        else
        {
              
            query=`
                    UPDATE stock
                    SET item_Type="${itemType}",
                        item_Name="${itemName}",
                        item_Type="${itemType}",
                        vendor_name="${vendorName}",
                        bill_id="${billNo}",
                        bill_date="${billDate}",
                        unit_cost="${unitCost}",
                        discounted_cost="${discountCost}",
                        paid_amount="${actualCost}",
                        quantity="${quantity}",
                        projected_cost="${projectedCost}",
                        stock_modified_date="${modifiedDate}",
                        pending_amount="${pendingamount}"
                    WHERE stock_id = ${stockid}`;
        }
                
                Database.query(query,function(error,data){
                    if(error){

                        return res.status(400).json({
                            status:"Bill No. Already Exists",
                            message:error
                        })
                    }
                    if(data){
                        return res.status(200).json({
                            status:"stock modified",
                            data:data
                        })
                    }

                })
            }
}


//Create Item Name
exports.CreateItemName = (req, res) => {
    try{
        const {itemType, itemName} = req.body
        if (!itemType || !itemName) {
            return res.json({msg:"all data needed"})
        }
        query = `
                    INSERT INTO  Item_Name (item_type, item_name)
                    VALUES ("${itemType}", "${itemName}")`;
        Database.query(query, function (error, data) {
            if (error) {
                return res.status(400).json({
                    status: "error at creating item",
                    message: error
                });
            }
            if (data) {
                return res.status(200).json({
                    status: "item created",
                    data: data
                });
            }
        })
    }catch(err){
        console.log(err)
    }
}

//get all item name
exports.GetItemName = (req, res) => {
    query = `
                SELECT *
                FROM Item_Name  order by item_type ASC`;
    Database.query(query, function (error, data) {
        if (error) {
            return res.status(400).json({
                status: "error at geting item",
                message: error
            });
        } else if (data) {
            return res.status(200).json({
                status: "got all item",
                data: data
            });
        }
    })
}

//get Item Name where item type is given
exports.GetItemNameByType = (req, res) => {
    const {itemType} = req.body
    query = `
                SELECT item_name
                FROM Item_Name WHERE item_type="${itemType}" ORDER BY id ASC`;
    Database.query(query, function (error, data) {
        if (error) {
            return res.status(400).json({
                status: "error at geting item",
                message: error
            });
        } else if (data) {
            return res.status(200).json({
                status: "got all item",
                data: data
            });
        }
    })
}

//delete item name
exports.DeleteItemName=(req,res)=>{
    const {id}=req.body
    if(!id){
        return res.status(400).json({
            status:"item id needed"
        })
    }
    else{
        query=`DELETE FROM Item_Name WHERE id="${id}"`
        Database.query(query,function(error,data){
            if(error){
                return res.status(400).json({
                    status:"error at deleting item",
                    message:error
                })
            }
            if(data){
                query=`select * from Item_Name`
                Database.query(query,function(error,data){
                    if(error){
                        return res.status(400).json({
                            status:"error at getting item",
                            message:error
                        })
                    }
                    if(data){
                        return res.status(200).json({
                            status:"item deleted",
                            data:data
                        })
                    }
                })
            }

        })
    }
}


//Create Stock Usage
 exports.CreateStockUsage = (req, res) => {
    try{
        const {itemName,quantity,usageDate,Type}=req.body
        if(!itemName || !quantity || !usageDate || !Type){
            return res.status(400).json({
                status:"all data needed"
            })
        }
        else{
            const query=`INSERT INTO Stock_Usage (item_name,quantity,entry_date,type) VALUES ("${itemName}","${quantity}","${usageDate}","${Type}")`;
            Database.query(query,function(error,data){
                if(error){
                    return res.status(400).json({
                        status:"error at creating stock usage",
                        message:error
                    })
                }
                if(data){
                    return res.status(200).json({
                        status:"stock usage created",
                        data:data
                    })
                }
            })
        }
    }catch(err){
        console.log(err)
    }
 }

 //get sum of posative stock and negetive stock usage
exports.GetPosativeAndNegetiveStockSum=(req,res)=>{
    const {itemName}=req.body
    if(!itemName){
        return res.status(400).json({
            status:"item name needed"
        })
    }
    else{
        query=`SELECT SUM(quantity) as Plus FROM Stock_Usage WHERE item_Name="${itemName}" AND type="Plus"`
        Database.query(query,function(error,data){
            if(error){
                return res.status(400).json({
                    status:"error at getting stock",
                    message:error
                })
            }
            if(data){
                query=`SELECT SUM(quantity) as Minus FROM Stock_Usage WHERE item_Name="${itemName}" AND type="Minus"`
                Database.query(query,function(error,data1){
                    if(error){
                        return res.status(400).json({
                            status:"error at getting stock",
                            message:error
                        })
                    }
                    if(data1){
                        return res.status(200).json({
                            status:"got all stock",
                            data:data,
                            data1:data1
                        })
                    }
                })
            }
        })
    }
}


//get Stock Usage
exports.GetStockUsage=(req,res)=>{
    const{itemName,fromDate,toDate}=req.body
    let query;
    if(!itemName && !fromDate && !toDate){
        query=`SELECT * FROM Stock_Usage ORDER BY entry_date DESC`
    }
    else if(itemName && !fromDate && !toDate){
        query=`SELECT * FROM Stock_Usage WHERE item_Name="${itemName}" ORDER BY entry_date DESC`
    }
    else if(fromDate && toDate && !itemName){
        query=`SELECT * FROM Stock_Usage WHERE entry_date BETWEEN "${fromDate}" AND "${toDate}" ORDER BY entry_date DESC`
    }
    else if(itemName && fromDate && toDate){
        query=`SELECT * FROM Stock_Usage WHERE item_Name="${itemName}" AND entry_date BETWEEN "${fromDate}" AND "${toDate}" ORDER BY entry_date DESC`
    }
    Database.query(query,function(error,data){
        if(error){
            return res.status(400).json({
                status:"error at getting stock",
                message:error
            })
        }
        if(data){
            return res.status(200).json({
                status:"got all stock",
                data:data
            })
        }
    })
}

//get Minus Stock Usage for Edit
exports.GetMinusStockUsage=(req,res)=>{
    const{itemName,date}=req.body
    let query;
    if(!itemName && !date){
        query=`SELECT * FROM Stock_Usage WHERE type="Minus" ORDER BY entry_date DESC`
    }
    else if(itemName && !date){
        query=`SELECT * FROM Stock_Usage WHERE item_Name="${itemName}" AND type="Minus" ORDER BY entry_date DESC`
    }
    else if(date && !itemName){
        query=`SELECT * FROM Stock_Usage WHERE entry_date = "${date}" AND type="Minus" ORDER BY entry_date DESC`
    }
    else if(itemName && date){
        query=`SELECT * FROM Stock_Usage WHERE item_Name="${itemName}" AND entry_date ="${date}" AND type="Minus" ORDER BY entry_date DESC`
    }
    Database.query(query,function(error,data){
        if(error){
            return res.status(400).json({
                status:"error at getting stock",
                message:error
            })
        }
        if(data){
            return res.status(200).json({
                status:"got all stock",
                data:data
            })
        }
    })
}