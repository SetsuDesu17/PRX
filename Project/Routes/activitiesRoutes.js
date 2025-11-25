import { Router } from 'express';
const router = Router();
import activitiesController from '../controllers/activitiesController.js';



router.get('/', activitiesController.getAllActivity);


router.get('/:id', activitiesController.getActivitiesById);


router.get('/status/:status', activitiesController.getActivitiesByStatus);


router.get('/date/:date', activitiesController.getActivitiesByDeadline);


router.get('/type/:type', activitiesController.getActivitiesByType);


router.get('/subject/:subject', activitiesController.getActivitiesBySubject);

export default router;  