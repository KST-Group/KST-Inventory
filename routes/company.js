var express = require('express');
var router=express.Router();
var controller=require('../controllers/CompanyController');

router.get("/", controller.retrieveCompany);
router.post("/add", controller.addCompany);
router.get("/:id", controller.getCompanyById);
router.put("/update", controller.updateCompany);
router.delete('/delete',controller.deleteCompany);

module.exports=router;

