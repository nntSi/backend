const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");

// admin
router.post("/api/admin/create", adminController.createAdmin);

module.exports = router;