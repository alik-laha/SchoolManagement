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
    const { id, name } = req.body;

    let search;
    let quarych;

    if (id) {
        search = id;
        quarych = "user_id"
    }
    else if (name) {
        search = name;
        quarych = "user_name"
    }
    else if (name && u_id) {
        search = id;
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
    try {
        query = `
        SELECT * FROM user `;
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

//update user

exports.UpdateUser = (req, res) => {
    const { id, name, password, role } = req.body
    try {
        if (!{ name, password, role, id }) {
            return res.message("all data needed")
        }
        query = `
        UPDATE user SET user_name="${name}",password="${password}",roletype_name="${role}" WHERE user_id=${id}`;
        Database.query(query, function (error, data) {
            if (error) throw error;
            if (data) {
                return res.status(200).json({
                    status: "success",
                    // data: data
                });
            }
        })
    } catch (err) {
        console.log(err.message)
    }
}

//delete user
exports.DeleteUser = (req, res) => {
    const { id } = req.body
    try {
        if (!{ id }) {
            return res.message("all data needed")
        }
        query = `
        DELETE FROM user WHERE user_id=${id}`;
        Database.query(query, function (error, data) {
            if (error) throw error;
            if (data) {
                return res.status(200).json({
                    status: "success",
                    // data: data
                });
            }
        })
    } catch (err) {
        console.log(err.message)
    }
}

//create role
exports.CreateRole = (req, res) => {
    const { role } = req.body
    try {
        if (!{ role }) {
            return res.message("all data needed")
        }
        query = `
        INSERT INTO role (roletype_name) VALUES ("${role}")`;
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

//get user by role

exports.GetUserByRole = (req, res) => {
    const { role } = req.body
    try {
        if (!{ role }) {
            return res.message("all data needed")
        }
        query = `
        SELECT * FROM user WHERE roletype_name="${role}"`;
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

//get all role
exports.GetRole = (req, res) => {
    try {
        query = `
        SELECT * FROM role`;
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