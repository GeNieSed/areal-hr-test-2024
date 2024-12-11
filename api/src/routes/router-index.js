const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index-сontroller');

// Прочитать все
router.get('/', indexController.readIndex);

module.exports = router;
