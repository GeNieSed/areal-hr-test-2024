const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');

router.get('/organization', organizationController.readOrganizations);
router.post('/organization', organizationController.createOrganization);
router.put('/:id', organizationController.updateOrganization);
router.delete('/:id', organizationController.deleteOrganization);
module.exports = router;
