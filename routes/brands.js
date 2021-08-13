var express = require('express');
var router = express.Router();
var controller = require("../controllers/BrandController");

router.get('/', controller.getAllBrand);
router.post('/add', controller.addBrand);

module.exports = router;
