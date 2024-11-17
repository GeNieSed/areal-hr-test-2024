const express = require('express');
const router = express.Router();
const fileController = require('../controllers/filesController');


// Прочитать все
router.get('/file', fileController.readFiles);


// Добавить новую запись
router.post('/file', fileController.createFile);


// Обновить существующую запись по ID
router.put('/file/:id', fileController.updateFile);


// Удалить запись по ID
router.delete('/file/:id', fileController.deleteFile);

module.exports = router;