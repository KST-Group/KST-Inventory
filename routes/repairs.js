const express=require('express');
const router=express.Router();
const controller=require('../controllers/RepairController');

router.get('/',controller.getDataRepair);
router.get('/dev',controller.getDataRepairDevice);
router.post('/add',controller.addRepair);
router.delete('/del',controller.delRepair);
router.post('/log',controller.addRepairLog);
router.get('/logs',controller.getDataRepairlog);
router.get('/rev',controller.getReceiveLog);
router.post('/addrev',controller.addReceiveLog);

module.exports=router;