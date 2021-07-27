var express = require('express');
var router=express.Router();
var controller=require('../controllers/PositionController');

router.get('/', controller.retrievePosition);

module.exports=router;