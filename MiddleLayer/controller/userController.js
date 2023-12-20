const Database = require('../Config/Dbconnection')
const fs = require('fs');

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
            if (error) {
                return res.status(400).json({
                    status: "failed",
                    data: "user not found"
                });

            }
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
    const { name, password, role,dOB} = req.body


    try {
        if (!{ name, password, role,dOB }) {
            return res.message("all data needed")
        }
        query = `
        INSERT INTO user (user_name,password,roletype_name,date_of_Birth) VALUES ("${name}","${password}","${role}","${dOB}")`;
        Database.query(query, function (error, data) {
            if (error) {
                return res.status(400).json({
                    status: "failed",
                    data: "user already exist"
                });
            }
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
    const { id, name, role } = req.body;
    let query;

    if (id && !role && !name) {
        query = `SELECT * FROM user WHERE user_id="${id}"`;
    }
    else if (name && !role && !id) {
        query = `SELECT * FROM user WHERE user_name="${name}"`;
    }
    else if (name && id) {
        query = `SELECT * FROM user WHERE user_name="${name}" AND user_id="${id}"`;
    }
    else if (name && role) {
        query = `SELECT * FROM user WHERE user_name="${name}" AND roletype_name="${role}"`;
    }
    else if (id && role) {
        query = `SELECT * FROM user WHERE user_id="${id}" AND roletype_name="${role}"`;
    }
    else if (role && !name && !id) {
        query = `SELECT * FROM user WHERE roletype_name="${role}"`;
    }
    else if (id && name && role) {
        query = `SELECT * FROM user WHERE user_id="${id}" AND user_name="${name}" AND roletype_name="${role}"`;
    }
    else {
        return res.send("at least one data needed")
    }
    try {
        Database.query(query, function (error, data) {
            if (error) {
                return res.status(400).json({
                    status: "failed",
                    data: "user not found"
                });
            }
            if (data[0]) {
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
    const { user_id } = req.body
    try {
        if (!{ user_id }) {
            return res.message("all data needed")
        }
        query = `
        DELETE FROM user WHERE user_id=${user_id}`;
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

exports.DeleteNotice =async (req, res) => {
    const {fileName} = req.body
    try {
        if (!{ fileName }) {
            return res.message("all data needed")
        }
       await fs.unlink(`./student/${fileName}`, function (err) {
            if (err) throw err;
            console.log('File deleted!');
            return res.status(200).json({
                status: "success",
            });
          });

    } catch (err) {
        console.log(err.message)
    }
}