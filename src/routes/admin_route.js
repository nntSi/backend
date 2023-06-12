const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");

// admin
router.get("/api/admin", adminController.findAdmin);
router.post("/api/admin/create", adminController.createAdmin);
router.delete("/api/admin/delete", adminController.deleteAdmin);
router.patch("/api/admin/update", adminController.updateAdmin);

module.exports = router;