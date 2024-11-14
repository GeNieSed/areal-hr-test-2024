const express = require('express');
const router = express.Router();
const registryController = require('../controllers/registryController');


// прочитать все должности
router.get('/position', registryController.readRegistry )

// добавить новую должность
router.post('/position', registryController.createRegistry)

// Обновить существующую организацию
router.put('/position/:id', registryController.updateRegistry)

// Удалить запись в бд
router.delete('/position/:id', registryController.deleteRegistry)

module.exports = router;