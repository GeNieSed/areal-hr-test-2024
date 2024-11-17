const express = require('express');
const router = express.Router();
const operationController = require('../controllers/operationsController');


// Прочитать все
router.get('/file', operationController.readOperations);


// Добавить новую запись
router.post('/file', operationController.createOperations);


// Обновить существующую запись по ID
router.put('/file/:id', operationController.updateOperations);


// Удалить запись по ID
router.delete('/file/:id', operationController.deleteOperations);

module.exports = router;