const express=require('express');
const router=express.Router();
const controller=require('../controllers/CheckinController');

router.get('/',controller.getDataCheckin);
router.get('/detail',controller.getDataCheckinDetail);
router.post('/add',controller.addCheckIn);
router.post('/adddetail',controller.addCheckInDtail);

module.exports=router;