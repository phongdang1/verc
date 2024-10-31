// db.js
const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,      
  user: process.env.DB_USER,      
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME   
});

// Kiểm tra kết nối
connection.connect((err) => {
  if (err) {
    console.error("Kết nối thất bại:", err.stack);
    return;
  }
  console.log("Đã kết nối tới cơ sở dữ liệu");
});

module.exports = connection;
