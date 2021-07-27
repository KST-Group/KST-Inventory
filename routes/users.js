var express = require('express');
var router=express.Router();
var controller=require('../controllers/UserController');

router.get("/", controller.getUser);
router.post("/add", controller.addUser);

module.exports=router;