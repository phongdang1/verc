// db.js
const mysql = require("mysql2");
require('dotenv').config(); // Tải các biến môi trường từ file .env

const connection = mysql.createConnection({
  host: process.env.DB_HOST,      // Lấy từ biến môi trường
  user: process.env.DB_USER,      // Lấy từ biến môi trường
  password: process.env.DB_PASSWORD, // Lấy từ biến môi trường
  database: process.env.DB_NAME    // Lấy từ biến môi trường
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
