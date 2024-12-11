const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/passport-сontroller');

// CRUD для сотрудников
router.post('/passports', employeeController.createPassport);
router.get('/passports', employeeController.readPassport);
router.put('/passports/:id', employeeController.updatePassport);
router.delete('/passports/:id', employeeController.deletePassport);

module.exports = router;
