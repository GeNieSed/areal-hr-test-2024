const express = require('express');
const router = express.Router();
const registryController = require('../controllers/registry-сontroller');

// прочитать все должности
router.get('/positions', registryController.readRegistry);

// добавить новую должность
router.post('/positions', registryController.createRegistry);

// Обновить существующую организацию
router.put('/positions/:id', registryController.updateRegistry);

// Удалить запись в бд
router.delete('/positions/:id', registryController.deleteRegistry);

module.exports = router;
