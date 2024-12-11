const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');

// Прочитать все организации
router.get('/organizations', organizationController.readOrganizations);

// Получить организацию по ID
router.get('/organizations/:id', organizationController.readOrganizationById);

// Добавить новую организацию
router.post('/organizations', organizationController.createOrganization);

// Обновить существующую организацию по ID
router.put('/organizations/:id', organizationController.updateOrganization);

// Удалить организацию по ID
router.delete('/organizations/:id', organizationController.deleteOrganization);

module.exports = router;
