const express=require('express');
const router=express.Router();
const controller=require('../controllers/OrderController');

router.post('/add',controller.createOrder);
router.post('/adddevice',controller.addOrder);
router.get('/',controller.getOrder);

module.exports=router;