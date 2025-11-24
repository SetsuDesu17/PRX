import { Router } from 'express';
const router = Router();
import requestsController from '../controllers/requestsController.js';

// Working
router.get('/', requestsController.getAllRequests);

// Working
router.get('/status/:status', requestsController.getRequestsByStatus);

// Working
router.get('/:id', requestsController.getRequestsById);

// Working
router.get('/datePublished/:date', requestsController.getRequestsByDate);

// Working
router.post('/create', requestsController.createRequest);

export default router;