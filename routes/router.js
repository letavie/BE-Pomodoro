const express = require("express");
const router = express();

router.use(require("./user").routerUser);
router.use(require("./admin").routerAdmin);

module.exports.router = router;
