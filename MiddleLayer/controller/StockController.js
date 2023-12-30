const Database = require('../Config/Dbconnection')


//create Item
exports.CreateItem = (req, res) => {
    const { item } = req.body

        if (!{ item }) {
            return res.message("all data needed")
        }
            else {
                query = `
                    INSERT INTO itemType (item_type)
                    VALUES ("${item}")`;
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
            }
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
    const { vendor } = req.body

        if (!{ vendor }) {
            return res.message("all data needed")
        }
                query = `
                    INSERT INTO vendor (vendor_name)
                    VALUES ("${vendor}")`;
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
    const {itemName,billNo,billDate,unitCost,quantity,itemType,vendorName,projectedCost}=req.body
    if(!itemName || !billNo || !billDate || !unitCost || !quantity || !itemType || !vendorName || !projectedCost){
        return res.status(400).json({
            status:"all data needed"
        })
    }
    else{
                query=`
                    INSERT INTO stock (item_Type,item_Name,vendor_name,bill_id,bill_date,unit_cost,quantity,projected_cost)
                    VALUES ("${itemType}","${itemName}","${vendorName}","${billNo}","${billDate}","${unitCost}","${quantity}","${projectedCost}")`
                Database.query(query,function(error,data){
                    if(error){

                        return res.status(400).json({
                            status:"error at creating stock",
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

    //get stock from search
    exports.GetStock=(req,res)=>{

                const{itemType,billDate,billId,vendorName,}=req.body

                    if(billId && !itemType && !billDate && !vendorName){
                        query=`SELECT * FROM stock WHERE bill_id REGEXP "${billId}" `
                    }
                    else if(itemType && !billDate && !vendorName){
                        query=`SELECT * FROM stock WHERE item_Type = "${itemType}" `
                    }
                    else if(billDate && !itemType  && !vendorName){
                        query=`SELECT * FROM stock WHERE bill_date REGEXP "${billDate}" `
                    }
                    else if(vendorName && !billDate  && !itemType){
                        query=`SELECT * FROM stock WHERE vendor_name="${vendorName}"`
                    }
                    else if(itemType && billDate  && !vendorName){
                        query=`SELECT * FROM stock WHERE item_Type = "${itemType}" AND bill_date REGEXP"${billDate}"`
                    }
                    else if(itemType && vendorName && !billDate){
                        query=`SELECT * FROM stock WHERE item_Type="${itemType}" AND vendor_name="${vendorName}"`
                    }
                    else if(billDate && vendorName && !itemType){
                        query=`SELECT * FROM stock WHERE  vendor_name="${vendorName}" AND bill_date REGEXP "${billDate}"`
                    }
                    else if(itemType && billDate && vendorName ){
                        query=`SELECT * FROM stock WHERE item_Type="${itemType}" AND vendor_name="${vendorName}" AND bill_date REGEXP "${billDate}"`
                    }
                    else{
                        query=`SELECT * FROM stock`
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
        query=`DELETE FROM vendor WHERE vendor_id="${vendorId}"`
        Database.query(query,function(error,data){
            if(error){
                return res.status(400).json({
                    status:"error at deleting vendor",
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
        query=`DELETE FROM itemType WHERE type_id="${itemId}"`
        Database.query(query,function(error,data){
            if(error){
                return res.status(400).json({
                    status:"error at deleting item",
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
}