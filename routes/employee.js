var express = require('express');
var router = express.Router();
var controller = require('../controllers/EmployeeController');

router.get('/', controller.getData);
router.get('/device', controller.getEmployeeWuthDevice);
router.post('/add', controller.addDataEmployee);
router.delete('/del',controller.deleteEmployee);


module.exports = router;