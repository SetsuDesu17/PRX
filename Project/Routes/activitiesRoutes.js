const express = require('express');
const router = express.Router();
const activitesController = require('../Controllers/activitesController');

// GET /api/activities - Get all activities
router.get('/api/activities', activitesController.getAllActivity);

// GET /api/activities/status/:status - Get activities by status
router.get('api/activities/status/:status', activitesController.getActivitiesByStatus);

// GET /api/activities/date/:date - Get activites by deadline
router.get('api/activities/date/:date', activitesController.getActivitiesByDeadline);

// GET /api/activities/type/:type - Get activities by type
router.get('/api/activites/type/:type', activitesController.getActivitiesByType);

// GET /api/activities/type/:subject - Get activities by subject
router.get('/api/activites/type/:subject', activitesController.getActivitiesBySubject);

module.exports = router;