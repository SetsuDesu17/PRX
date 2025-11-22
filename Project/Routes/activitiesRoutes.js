import { Router } from 'express';
const router = Router();
import activitiesController from '../controllers/activitiesController.js';

// GET / - Get all activities
router.get('/', activitiesController.getAllActivity);

// GET //status/:status - Get activities by status
router.get('/status/:status', activitiesController.getActivitiesByStatus);

// GET //date/:date - Get activites by deadline
router.get('/date/:date', activitiesController.getActivitiesByDeadline);

// GET //type/:type - Get activities by type
router.get('/type/:type', activitiesController.getActivitiesByType);

// GET //type/:subject - Get activities by subject
router.get('/type/:subject', activitiesController.getActivitiesBySubject);

export default router;