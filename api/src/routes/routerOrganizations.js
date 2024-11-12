const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');

// Прочитать все организации
router.get('/organization', organizationController.readOrganizations);

// Добавить новую организацию
router.post('/organization', organizationController.createOrganization);

// Обновить существующую организацию по ID
router.put('/organization/:id', organizationController.updateOrganization);

// Удалить организацию по ID
router.delete('/organization/:id', organizationController.deleteOrganization);

module.exports = router;
