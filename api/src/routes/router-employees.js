const express = require('express');
const router = express.Router();
const EmployeesController = require('../controllers/employees-сontroller');

router.get('/employees', EmployeesController.readEmployees);

// Добавить новую организацию
router.post('/employees', EmployeesController.createEmployees);

// Обновить существующую организацию по ID
router.put('/employees/:id', EmployeesController.updateEmployees);

// Удалить организацию по ID
router.delete('/employees/:id', EmployeesController.deleteEmployees);

module.exports = router;
