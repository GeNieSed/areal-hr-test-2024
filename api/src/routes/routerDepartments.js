const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

// Получить все отделы
router.get('/department', departmentController.readDepartments);

// Получить отдел по ID
router.get('/department/:id', departmentController.readDepartmentById);

// Добавить новый отдел
router.post('/department', departmentController.createDepartment);

// Обновить существующий отдел по ID
router.put('/department/:id', departmentController.updateDepartment);

// Удалить отдел по ID
router.delete('/department/:id', departmentController.deleteDepartment);

module.exports = router;
