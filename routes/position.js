var express = require('express');
var router=express.Router();
var controller=require('../controllers/PositionController');

router.get('/', controller.retrievePosition);
router.post('/add',controller.addPostion);
router.delete("/delete", controller.deletePosition);

module.exports=router;