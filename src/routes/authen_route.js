const express = require("express");
const router = express.Router();
const authenController = require("../controller/authenController.js");

router.post("/api/admin/login", authenController.adminLogin);

module.exports = router;