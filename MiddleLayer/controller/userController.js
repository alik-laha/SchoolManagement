const Database = require('../Config/Dbconnection')
const fs = require('fs');
const jwt = require('jsonwebtoken');
const Bcrypt = require('bcryptjs');

//login user
exports.Login = (req, res) => {
    try {
        const {name, pass} = req.body
        if (!{name, pass}) {
            return res.message("all data needed")
        }
        query = `SELECT * FROM user WHERE user_name = "${name}"`;
        Database.query(query,async function (error, data) {
            if (error) {
                return res.status(400).json({
                    status: "failed",
                    data: "User not found"
                })
            }else{
                    const Password = data[0].password
                const passwordMatch = await Bcrypt.compare(pass, Password)
                    if (passwordMatch) {
                        const token = jwt.sign({id: data[0].user_id, role: data[0].role},process.env.SECURITY_KEY, {expiresIn: '5h'});
                        return res.status(200).json({
                            status: "success",
                            data: data,
                            token: token
                        });
                }
                    else{
                        return res.status(400).json({
                            status: "failed",
                            data: "Password not match"
                        })
                    }
            }
        })
    }catch(err){
        console.log(err.message)
    }

}

//create user
    exports.CreateUser = async (req, res) => {
        const {name, password, role} = req.body


            if (!{name, password, role}) {
                return res.message("all data needed")
            }
            const pass=await Bcrypt.hash(password, 10)
                    query = `
                        INSERT INTO user (user_name, password, roletype_name)
                        VALUES ("${name}", "${pass}", "${role}")`;
                    Database.query(query, function (error, data) {
                        if (error) {

                            return res.status(400).json({
                                status: "failed",
                                data: `UserName ${name} already exists`,
                                msg: error
                            });
                        }
                        if (data) {
                            return res.status(200).json({
                                status: "success",
                                data: data
                            });
                        }

                    })
    }

//search user by request(id,name)

    exports.SearchUser = (req, res) => {
        const {name, role} = req.body;
        let query;

        if (name && !role) {
            query = `SELECT *
                     FROM user
                     WHERE user_name REGEXP "${name}" ORDER BY user_id ASC`;
        } else if (name && role) {
            query = `SELECT *
                     FROM user
                     WHERE roletype_name = "${role}"
                       AND user_name REGEXP "${name}" ORDER BY user_id ASC`;
        } else if (role && !name) {
            query = `SELECT *
                     FROM user
                     WHERE roletype_name = "${role}" ORDER BY user_id ASC`;
        } else if (!name && !role) {
            query = `SELECT *
                     FROM user ORDER BY user_id ASC`;
        }
                Database.query(query, function (error, data) {
                    if (data.length === 0) {
                        return res.status(400).json({
                            status: "failed",
                            data: `Desired Result is not found with User Name ${name} and Role ${role} combination`
                        });
                    } else if (data[0]) {

                        return res.status(200).json({
                            status: "success",
                            data: data
                        });
                    }

                })
    }


//update user

    exports.UpdateUser = (req, res) => {
        const {id, name, password, role} = req.body

            if (!{name, password, role, id}) {
                return res.message("all data needed")
            }
                    query = `
                        UPDATE user
                        SET user_name="${name}",
                            password="${password}",
                            roletype_name="${role}"
                        WHERE user_id = ${id}`;
                    Database.query(query, function (error, data) {
                        if (error) {
                            connection.release();
                            res.send(error)
                        }
                        if (data) {
                            return res.status(200).json({
                                status: "success",
                                // data: data
                            });
                        }

                    })
    }

//delete user
    exports.DeleteUser = (req, res) => {
        const {user_id} = req.body

            if (!{user_id}) {
                return res.message("all data needed")
            }
                    query = `
                        DELETE
                        FROM user
                        WHERE user_id = ${user_id}`;
                    Database.query(query, function (error, data) {
                        if (error) {

                            return res.status(400).json({
                                status: "failed",
                                data: "user not found"
                            });
                        }
                        if (data) {
                            return res.status(200).json({
                                status: "success",
                                // data: data
                            });
                        }

                    })
    }

//create role
    exports.CreateUserRole = (req, res) => {
        const {role} = req.body

            if (!{role}) {
                return res.message("all data needed")
            }
                    query = `
                        INSERT INTO role (roletype_name)
                        VALUES ("${role}")`;
                    Database.query(query, function (error, data) {
                        if (error) {
                            res.send(error)
                        }
                        if (data) {
                            return res.status(200).json({
                                status: "success",
                                data: data
                            });
                        }

                    })
                }


//get all role
    exports.GetUserRole = (req, res) => {
                query = ` SELECT * FROM role`;
                Database.query(query, function (error, data) {
                    if (error) {
                        res.status(400).send(error)
                    }
                    if (data) {
                        return res.status(200).json({
                            status: "success",
                            data: data
                        });
                    }

                })
    }
//deleteNotice
    exports.DeleteNotice = async (req, res) => {
        const {fileName} = req.body
        try {
            if (!{fileName}) {
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
//deleteActiveNotice

exports.DeleteActiveNotice = async (req, res) => {
    const {fileName} = req.body
    try {
        if (!{fileName}) {
            return res.message("all data needed")
        }
        await fs.unlink(`./activeNotice/${fileName}`, function (err) {
            if (err) throw err;
            console.log('File (Active Notice) deleted!');
            return res.status(200).json({
                status: "success",
            });
        });

    } catch (err) {
        console.log(err.message)
    }
}