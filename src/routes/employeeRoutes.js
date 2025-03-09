const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.post('/', employeeController.createEmployee);
router.get('/', employeeController.findAllEmployee);
router.get('/:id', employeeController.findById);
router.put('/:id', employeeController.updateById);
router.delete('/:id', employeeController.deleteById);
router.get('/search', employeeController.searchEmployee);

module.exports = router;