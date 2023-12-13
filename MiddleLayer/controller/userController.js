const Database = require('../Config/Dbconnection')

//login user
exports.Login = (req, res) => {
    const { name, password } = req.body
    try {
        if (!{ name, password }) {
            return res.message("all data needed")
        }
        query = `
        SELECT * FROM user 
        WHERE user_name ="${name}" AND password = "${password}"`;
        Database.query(query, function (error, data) {
            if (error) throw error;
            if (data) {
                return res.status(200).json({
                    status: "success",
                    data: data
                });
            }
        })
    } catch (err) {
        console.log(err.message)
    }
}

//create user
exports.Create = (req, res, next) => {
    const { id, name, password, role } = req.body
    try {
        if (!{ name, password, role, id }) {
            return res.message("all data needed")
        }
        query = `
        INSERT INTO user (user_id,user_name,password,roletype_name) VALUES ( ${id},"${name}","${password}","${role}")`;
        Database.query(query, function (error, data) {
            if (error) throw error;
            if (data) {
                return res.status(200).json({
                    status: "success",
                    data: data
                });
            }
        })
    } catch (err) {
        console.log(err.message)
    }
}