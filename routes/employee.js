var express = require('express');
var router=express.Router();
var controller=require('../controllers/EmployeeController');

router.get('/',controller.getData);


module.exports=router;