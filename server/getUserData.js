const db = require("./db");

// Hàm lấy dữ liệu từ bảng User
function getUserData() {
  const query = "SELECT * FROM User";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Lỗi khi lấy dữ liệu:", err);
      return;
    }
    console.log("Dữ liệu người dùng:", results);
  });
}

// Gọi hàm để lấy dữ liệu
getUserData();
