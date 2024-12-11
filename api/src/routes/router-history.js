const express = require('express');
const router = express.Router();
const historyController = require('../controllers/history-сontroller');

// Прочитать все
router.get('/ChangeHistories', historyController.readChangeHistory);

// Добавить новую запись
router.post('/ChangeHistories', historyController.createChangeHistory);

// Обновить существующую запись по ID
router.put('/ChangeHistories/:id', historyController.updateChangeHistory);

// Удалить запись по ID
router.delete('/ChangeHistories/:id', historyController.deleteChangeHistory);

module.exports = router;
