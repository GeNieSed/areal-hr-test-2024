const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/employeesController');

router.get('/employees', departmentController.readDepartment);


// Добавить новую организацию
router.post('/employees', departmentController.createDepartment);


// Обновить существующую организацию по ID
router.put('/employees/:id', departmentController.updateDepartment);


// Удалить организацию по ID
router.delete('/employees/:id', departmentController.deleteDepartment);

module.exports = router;
