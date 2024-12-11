const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/department-сontroller');

// Получить все отделы
router.get('/departments', departmentController.readDepartments);

// Получить отдел по ID
router.get('/departments/:id', departmentController.readDepartmentById);

// Добавить новый отдел
router.post('/departments', departmentController.createDepartment);

// Обновить существующий отдел по ID
router.put('/departments/:id', departmentController.updateDepartment);

// Удалить отдел по ID
router.delete('/departments/:id', departmentController.deleteDepartment);

module.exports = router;
