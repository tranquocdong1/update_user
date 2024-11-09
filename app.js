// app.js

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/userRoutes");
const PORT = 3000;

// Cài đặt EJS làm template engine
app.set("view engine", "ejs");

// Middleware để phân tích dữ liệu từ form
app.use(express.urlencoded({ extended: true }));

// Kết nối tới MongoDB
mongoose
  .connect("mongodb+srv://tranquocdong102:g0jN1tD6Z7DjEepu@cluster0.s51on.mongodb.net/userDB")
  .then(() => {
    console.log("Kết nối thành công tới MongoDB");
  })
  .catch((err) => {
    console.error("Lỗi kết nối MongoDB:", err);
  });

// Sử dụng các route
app.use("/", userRoutes);

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
