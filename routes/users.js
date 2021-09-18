var express = require('express');
var router=express.Router();
var controller=require('../controllers/UserController');

router.get("/", controller.getUser);
router.post("/add", controller.addUser);
router.get('/:id',controller.getUserbyId);
router.delete("/:username", controller.deleteUser);
router.put('/up',controller.updateUser);
module.exports=router;