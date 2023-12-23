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
                FROM itemType`;
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
                FROM vendor`;
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

    //get all stock
    exports.GetStock=(req,res)=>{
                query=`
                    SELECT *
                    FROM stock`
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