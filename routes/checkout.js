var express=require('express');
var router=express.Router();
var controller=require('../controllers/CheckOutController');
router.get('/',controller.getCheckOutData);
router.post('/add',controller.createCheckOut);
router.post('/detail',controller.createCheckOutDetail);
router.put('/status',controller.updateStatus);
module.exports=router;