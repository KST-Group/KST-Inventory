const express=require('express');
const router=express.Router();
const controller=require('../controllers/RepairController');

router.get('/',controller.getDataRepair);

module.exports=router;