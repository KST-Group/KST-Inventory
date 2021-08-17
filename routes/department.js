var express = require('express');
var router=express.Router();

var controller=require('../controllers/DepartmentController');

router.get('/',controller.retrieveDepart);
router.get('/:id',controller.retrieveDataById)
router.post('/add',controller.addDataDepartment);
router.put('/update',controller.updateDepartment);
router.delete('/delete',controller.deleteDepartment);
router.get("/cm/:cm", controller.getDataByCompany);

module.exports=router;