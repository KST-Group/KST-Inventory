const express=require('express');
const router=express.Router();
const controller=require('../controllers/CheckinController');

router.get('/',controller.getDataCheckin);

module.exports=router;