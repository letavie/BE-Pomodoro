const express = require("express");
const app = express();
require("dotenv").config();
app.get("/", function (req, res) {
  res.send("hello ae ");
});
app.listen(process.env.PORT, function () {
  console.log("server running : http://localhost:" + process.env.PORT);
});