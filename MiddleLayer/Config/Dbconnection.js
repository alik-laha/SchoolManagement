const mysql = require('mysql');

const con = mysql.createConnection({
    host: "20.244.3.173",
    user: 'school',
    password: 'aliklaha12',
    database: "ALHILALDB"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;