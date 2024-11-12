const express = require('express');
const router = express.Router();
const positionsController = require('../controllers/positionsController');


// прочитать все должности
router.get('position', positionsController.readPositions )

// добавить новую должность
router.post('/position', positionsController.createPositions)

// Обновить существующую организацию
router.put('/position/:id', positionsController.updatePositions)

// Удалить запись в бд
router.delete('/position/:id', positionsController.deletePositions)

module.exports = router;