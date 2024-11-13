const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

router.get('/department', departmentController.readDepartment);


// Добавить новую организацию
router.post('/department', departmentController.createDepartment);


// Обновить существующую организацию по ID
router.put('/department/:id', departmentController.updateDepartment);


// Удалить организацию по ID
router.delete('/department/:id', departmentController.deleteDepartment);

module.exports = router;
