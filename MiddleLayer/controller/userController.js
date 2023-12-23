const Database = require('../Config/Dbconnection')
const fs = require('fs');

//login user
exports.Login = (req, res) => {
    const {name, pass} = req.body
    if (!{name, pass}) {
        return res.message("all data needed")
    }
    Database.getConnection((err, connection) => {

        if (err) {
            res.send(err.message)
        } else {
            query = `
                SELECT *
                FROM user
                WHERE user_name = "${name}"`;
            connection.query(query, function (error, data) {
                if (error) {
                    connection.release();
                    return res.status(400).json({
                        status: "failed",
                        data: "user not found"
                    });

                }
                if (data) {
                    if (data[0].password == pass) {
                        connection.release();
                        return res.status(200).json({
                            status: "success",
                            data: data
                        });
                    } else {
                        connection.release();
                        return res.status(400).json({
                            status: "failed",
                            data: "wrong password"
                        });
                    }
                }

            })

        }
    })
}

//create user
    exports.CreateUser = (req, res) => {
        const {name, password, role, dOB} = req.body


            if (!{name, password, role, dOB}) {
                return res.message("all data needed")
            }
            Database.getConnection((err, connection) => {
                if (err) {
                    return res.status(400).json({
                        status: "failed",
                        data: "did not connect to database"
                    });
                } else {
                    query = `
                        INSERT INTO user (user_name, password, roletype_name, date_of_Birth)
                        VALUES ("${name}", "${password}", "${role}", "${dOB}")`;
                    connection.query(query, function (error, data) {
                        if (error) {
                            connection.release();
                            return res.status(400).json({
                                status: "failed",
                                data: "user already exist"
                            });
                        }
                        if (data) {
                            connection.release();
                            return res.status(200).json({
                                status: "success",
                                data: data
                            });
                        }

                    })
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
                     WHERE user_name = "${name}"`;
        } else if (name && role) {
            query = `SELECT *
                     FROM user
                     WHERE user_name = "${name}"
                       AND roletype_name = "${role}"`;
        } else if (role && !name) {
            query = `SELECT *
                     FROM user
                     WHERE roletype_name = "${role}"`;
        } else if (!name && !role) {
            query = `SELECT *
                     FROM user`;
        }
        Database.getConnection((err, connection) => {
            if (err) {
                return res.status(400).json({
                    status: "failed",
                    data: "did not connect to database"
                });
            } else {
                connection.query(query, function (error, data) {
                    if (data.length == 0) {
                        connection.release();
                        return res.status(400).json({
                            status: "failed",
                            data: `Entry Not found with user name ${name} `
                        });
                    } else if (data[0]) {
                        connection.release();
                        return res.status(200).json({
                            status: "success",
                            data: data
                        });
                    }

                })
            }
        })
    }


//update user

    exports.UpdateUser = (req, res) => {
        const {id, name, password, role} = req.body

            if (!{name, password, role, id}) {
                return res.message("all data needed")
            }
            Database.getConnection((err, connection) => {
                if(err){
                    return res.status(400).json({
                        status: "failed",
                        data: "did not connect to database"
                    });
                }
                else {
                    query = `
                        UPDATE user
                        SET user_name="${name}",
                            password="${password}",
                            roletype_name="${role}"
                        WHERE user_id = ${id}`;
                    connection.query(query, function (error, data) {
                        if (error) {
                            connection.release();
                            res.send(error)
                        }
                        if (data) {
                            connection.release()
                            return res.status(200).json({
                                status: "success",
                                // data: data
                            });
                        }

                    })
                }
        } )
    }

//delete user
    exports.DeleteUser = (req, res) => {
        const {user_id} = req.body

            if (!{user_id}) {
                return res.message("all data needed")
            }
            Database.getConnection((err, connection) => {
                if (err) {
                    return res.status(400).json({
                        status: "failed",
                        data: "did not connect to database",
                        message:err.message
                    });
                }
                else {
                    query = `
                        DELETE
                        FROM user
                        WHERE user_id = ${user_id}`;
                    connection.query(query, function (error, data) {
                        if (error) {
                            connection.release();
                            return res.status(400).json({
                                status: "failed",
                                data: "user not found"
                            });
                        }
                        ;
                        if (data) {
                            connection.release();
                            return res.status(200).json({
                                status: "success",
                                // data: data
                            });
                        }

                    })
                }
        } )
    }

//create role
    exports.CreateUserRole = (req, res) => {
        const {role} = req.body

            if (!{role}) {
                return res.message("all data needed")
            }
            Database.getConnection((err, connection) => {
                if (err) {
                    return res.status(400).json({
                        status: "failed",
                        data: "did not connect to database"
                    });
                    }
                else {
                    query = `
                        INSERT INTO role (roletype_name)
                        VALUES ("${role}")`;
                    connection.query(query, function (error, data) {
                        if (error) {
                            connection.release();
                            res.send(error)
                        }
                        if (data) {
                            connection.release();
                            return res.status(200).json({
                                status: "success",
                                data: data
                            });
                        }

                    })
                }
        } )

    }


//get all role
    exports.GetUserRole = (req, res) => {
        Database.getConnection((err, connection) => {
            if (err) {
                return res.status(400).json({
                    status: "failed",
                    data: "did not connect to database"
                });
            }
            else {
                query = ` SELECT *FROM role`;
                connection.query(query, function (error, data) {
                    if (error) {
                        connection.release();
                        res.status(400).send(error)
                    }
                    if (data) {
                        connection.release();
                        return res.status(200).json({
                            status: "success",
                            data: data
                        });
                    }

                })
            }
        } )
    }

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
