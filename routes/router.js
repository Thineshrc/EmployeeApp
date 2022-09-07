var express = require('express');
var router = express.Router();

var employeeController = require('../controller/employeeController');

router.get('/getemployee',employeeController.getemployee); 
router.get('/getemployee/:id',employeeController.getemployeebyId);
router.get('/delete/:id',employeeController.deleteById);
router.post('/update/:id',employeeController.updateById);


module.exports = router;