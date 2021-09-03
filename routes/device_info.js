var express = require('express');
var router=express.Router();
var controller=require('../controllers/DeviceController');

router.get("/", controller.getDeviceData);
router.post("/add", controller.addDevice);
router.get('/id/:deviceId',controller.geDeviceDataById);
router.delete('/del',controller.deleteDevice);
router.get("/use", controller.getDeviceUsing);

module.exports=router;
