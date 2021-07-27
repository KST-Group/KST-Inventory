var express = require('express');

var router=express.Router();
var LoginController=require('../controllers/LoginController');
router.post('/',LoginController);
module.exports = router;