const mysql = require('mysql2');


const con = mysql.createPool({
    connectionLimit: 10,
    waitForConnections: true,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    timezone: 'UTC+5.30'
});


module.exports = con;