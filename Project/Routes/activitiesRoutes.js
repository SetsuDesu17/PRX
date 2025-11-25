import { Router } from 'express';
const router = Router();
import activitiesController from '../controllers/activitiesController.js';
//import { act } from 'react';

// Working
router.get('/', activitiesController.getAllActivity);

// Working
router.get('/:id', activitiesController.getActivitiesById);

// Working
router.get('/status/:status', activitiesController.getActivitiesByStatus);

// Working
router.get('/date/:date', activitiesController.getActivitiesByDeadline);

// Working
router.get('/type/:type', activitiesController.getActivitiesByType);

// Working
router.get('/subject/:subject', activitiesController.getActivitiesBySubject);

export default router;  