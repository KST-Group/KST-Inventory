const express=require('express');
const router=express.Router();
const controller=require('../controllers/ReportController');

router.get('/device',controller.getDeviceReport);

module.exports=router;