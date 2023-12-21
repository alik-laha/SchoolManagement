const Database = require('../Config/Dbconnection')


//create Item
exports.CreateItem = (req, res) => {
    const { item } = req.body
    try {
        if (!{ item }) {
            return res.message("all data needed")
        }
        query = `
        INSERT INTO itemType (item_type) VALUES ("${item}")`;
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
    } catch (err) {
        console.log(err.message)
    }
}



//get all item
exports.GetItem = (req, res) => {
    try {
        query = `
        SELECT * FROM itemType`;
        Database.query(query, function (error, data) {
            if (error) {
                return res.status(400).json({
                    status: "error at geting item",
                    message: error
                });

            }
            else if (data) {
                return res.status(200).json({
                    status: "got all item",
                    data: data
                });
            }
        })
    } catch (err) {
        console.log(err.message)
    }
}

//create vendor
exports.CreateVendor = (req, res) => {
    const { vendor } = req.body
    try {
        if (!{ vendor }) {
            return res.message("all data needed")
        }
        query = `
        INSERT INTO vendor (vendor_name) VALUES ("${vendor}")`;
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
    } catch (err) {
        console.log(err.message)
    }
}

//get all vendor
exports.GetVendor = (req, res) => {
    try {
        query = `
        SELECT * FROM vendor`;
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
    } catch (err) {
        console.log(err.message)
    }
}