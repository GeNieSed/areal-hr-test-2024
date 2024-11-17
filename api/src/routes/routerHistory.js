const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');


// Прочитать все
router.get('/ChangeHistory', historyController.readChangeHistory);


// Добавить новую запись
router.post('/ChangeHistory', historyController.createChangeHistory);


// Обновить существующую запись по ID
router.put('/ChangeHistory/:id', historyController.updateChangeHistory);


// Удалить запись по ID
router.delete('/ChangeHistory/:id', historyController.deleteChangeHistory);

module.exports = router;