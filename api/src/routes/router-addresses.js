const express = require('express');
const router = express.Router();
const addressesController = require('../controllers/addresses-сontroller');

router.get('/addresses', addressesController.readAddresses);

// Добавить новую организацию
router.post('/addresses', addressesController.createAddresses);

// Обновить существующую организацию по ID
router.put('/addresses/:id', addressesController.updateAddresses);

// Удалить организацию по ID
router.delete('/addresses/:id', addressesController.deleteAddresses);

module.exports = router;
