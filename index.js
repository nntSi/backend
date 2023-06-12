const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use(require("./src/api"));

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
