var express = require("express");

var router = express.Router();
var controoller = require("../controllers/DeviceTypeController");

router.post("/add", controoller.addType);
router.get("/", controoller.getDeviceType);

module.exports = router;
