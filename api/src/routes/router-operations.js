const express = require('express');
const router = express.Router();
const operationController = require('../controllers/operations-сontroller');

// Прочитать все
router.get('/operations', operationController.readOperations);

// Добавить новую запись
router.post('/operations', operationController.createOperations);

// Обновить существующую запись по ID
router.put('/operations/:id', operationController.updateOperations);

// Удалить запись по ID
router.delete('/operations/:id', operationController.deleteOperations);

module.exports = router;
