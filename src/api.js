const express = require("express");
const router = express.Router();

router.use(require("./routes/admin_route"));

module.exports = router;