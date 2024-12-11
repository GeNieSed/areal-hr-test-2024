const express = require('express');
const router = express.Router();
const positionsController = require('../controllers/positions-сontroller');

// прочитать все должности
router.get('/positions', positionsController.readPositions);

// добавить новую должность
router.post('/positions', positionsController.createPositions);

// Обновить существующую организацию
router.put('/positions/:id', positionsController.updatePositions);

// Удалить запись в бд
router.delete('/positions/:id', positionsController.deletePositions);

module.exports = router;
