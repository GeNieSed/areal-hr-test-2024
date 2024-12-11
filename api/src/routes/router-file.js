const express = require('express');
const router = express.Router();
const fileController = require('../controllers/files-сontroller');

// Прочитать все
router.get('/files', fileController.readFiles);

// Добавить новую запись
router.post('/files', fileController.createFile);

// Обновить существующую запись по ID
router.put('/files/:id', fileController.updateFile);

// Удалить запись по ID
router.delete('/files/:id', fileController.deleteFile);

module.exports = router;
