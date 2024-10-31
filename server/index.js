const express = require("express");
const db = require("./db"); // Kết nối đến cơ sở dữ liệu
const app = express();
const PORT = 5000;

// Middleware để parse JSON
app.use(express.json());

// Route để lấy dữ liệu người dùng
app.get("/api/users", (req, res) => {
  const query = "SELECT * FROM User";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Lỗi khi lấy dữ liệu:", err);
      return res.status(500).json({ error: "Có lỗi xảy ra" });
    }
    res.json(results); // Trả về dữ liệu người dùng
  });
});

// Khởi động máy chủ
app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy trên cổng ${PORT}`);
});
