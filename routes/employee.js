var express = require('express');
var router = express.Router();
var controller = require('../controllers/EmployeeController');

router.get('/', controller.getData);
router.get('/device', controller.getEmployeeWithDevice);
router.post('/add', controller.addDataEmployee);
router.delete('/del',controller.deleteEmployee);
router.get('/usings',controller.getEmployeeUsingDevice);


module.exports = router;