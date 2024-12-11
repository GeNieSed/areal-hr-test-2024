const express = require('express');
const router = express.Router();
const typesController = require('../controllers/types-сontroller');

router.get('/types', typesController.readTypes);

// Добавить новую организацию
router.post('/types', typesController.createTypes);

// Обновить существующую организацию по ID
router.put('/types/:id', typesController.updateTypes);

// Удалить организацию по ID
router.delete('/types/:id', typesController.deleteTypes);

module.exports = router;
