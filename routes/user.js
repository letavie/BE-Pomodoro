const express = require("express");
const routerUser = express.Router();

routerUser.get("/user", function (req, res) {
  res.send("hello ae , i letavie user");
});
routerUser.get("/", function (req, res) {
  res.send("hello ae , i letavie ");
});
// routerUser.get("/user/:age/:gender", function (req, res) {
//   res.send(req.param.age);
// });
module.exports.routerUser = routerUser;
