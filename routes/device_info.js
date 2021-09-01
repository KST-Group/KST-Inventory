var express = require('express');
var router=express.Router();
var controller=require('../controllers/DeviceController');

router.get("/", controller.getDeviceData);
router.post("/add", controller.addDevice);
router.get('/:deviceId',controller.geDeviceDataById);
module.exports=router;
