const express = require("express");
const routerAdmin = express.Router();

routerAdmin.get("/admin", function (req, res) {
  res.send("hello ae , i letavie admin");
});
routerAdmin.get("/admin/:age/:gender", function (req, res) {
  res.send(req.params);
});
module.exports.routerAdmin = routerAdmin;
