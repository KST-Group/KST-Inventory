var express = require('express');
var router=express.Router();
var controller=require('../controllers/DeviceController');

router.get("/", controller.getDeviceData);
router.post("/add", controller.addDevice);
module.exports=router;
