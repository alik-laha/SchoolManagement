const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: 'school',
    password: 'password',
    database: 'ALHILALDB'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;