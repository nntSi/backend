const express = require("express");
const router = express.Router();

router.use(require("./routes/admin_route.js"));
router.use(require("./routes/authen_route.js"));

module.exports = router;