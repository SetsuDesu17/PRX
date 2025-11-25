import { Router } from 'express';
const router = Router();
import requestsController from '../controllers/requestsController.js';


router.get('/', requestsController.getAllRequests);


router.get('/status/:status', requestsController.getRequestsByStatus);


router.get('/:id', requestsController.getRequestsById);


router.get('/datePublished/:date', requestsController.getRequestsByDate);


router.post('/create', requestsController.createRequest);

export default router;