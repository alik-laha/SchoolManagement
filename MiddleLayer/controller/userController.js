const Database = require('../Config/Dbconnection')

//login user
exports.Login = (req, res) => {
    const { name, pass } = req.body
    try {
        if (!{ name, pass }) {
            return res.message("all data needed")
        }
        query = `
        SELECT * FROM user WHERE user_name ="${name}"`;
        Database.query(query, function (error, data) {
            if (error) throw error;
            if (data) {
                if (data[0].password == pass) {
                    return res.status(200).json({
                        status: "success",
                        data: data
                    });
                }
                else {
                    return res.status(400).json({
                        status: "failed",
                        data: "wrong password"
                    });
                }
            }
        })
    } catch (err) {
        console.log(err.message)
    }
}

//create user
exports.Create = (req, res) => {
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

//search user by request(id,name)

exports.SearcheData = (req, res) => {
    const { u_id, u_name } = req.body;

    let search;
    let quarych;

    if (u_id) {
        search = u_id;
        quarych = "user_id"
    }
    else if (u_name) {
        search = u_name;
        quarych = "user_name"
    }
    else if (u_name && u_id) {
        search = u_id;
        quarych = "user_id"
    }
    else {
        return res.send("at least one data needed")
    }
    try {
        query = `
        SELECT * FROM user WHERE ${quarych} ="${search}"`;
        Database.query(query, function (error, data) {
            if (error) throw error;
            if (data[0]) {
                return res.status(200).json({
                    status: "success",
                    data: data[0]
                });
            }
        })
    } catch (err) {
        console.log(err.message)
    }
}

//get all user

exports.SendData = (req, res) => {

}