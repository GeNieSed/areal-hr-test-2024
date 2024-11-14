const express = require('express');
const router = express.Router();
const passportController = require('../controllers/passportController');


// Прочитать все организации
router.get('/passport', passportController.readPassport);


// Добавить новую организацию
router.post('/passport', passportController.createPassport);


// Обновить существующую организацию по ID
router.put('/passport/:id', passportController.updatePassport);


// Удалить организацию по ID
router.delete('/passport/:id', passportController.deletePassport);

module.exports = router;