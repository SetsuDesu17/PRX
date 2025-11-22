import { Router } from 'express';
const router = Router();
import requestsController from '../controllers/requestsController.js';

// GET / - Get requests
router.get('/', requestsController.getAllRequests);

// GET /status/:status - Get requests by status
router.get('/status/:status', requestsController.getRequestsByStatus);

// GET /id/:id - Get requests by ID
router.get('/id/:id', requestsController.getRequestsById);

// GET /date_publish/:date/:olderOrLater - Get requests by date published
router.get('/date_publish/:date/', requestsController.getRequestsByDate);

// POST /create - Create a request
router.post('/create', requestsController.createRequest);

export default router;