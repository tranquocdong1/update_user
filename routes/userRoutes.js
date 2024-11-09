// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route hiển thị form thêm người dùng
router.get("/", userController.showForm);

// Route xử lý thêm người dùng
router.post("/add-user", userController.addUser);

// Route hiển thị danh sách người dùng
router.get("/users", userController.showUsers);

// Route hiển thị form chỉnh sửa người dùng
router.get("/edit/:id", userController.editUser);

// Route xử lý cập nhật người dùng
router.post("/update/:id", userController.updateUser);

// Route xóa người dùng
router.get("/delete/:id", userController.deleteUser);

module.exports = router;
