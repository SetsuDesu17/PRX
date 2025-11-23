import { Router } from 'express';
const router = Router();
import requestsController from '../controllers/requestsController.js';

// GET / - Get requests -- THIS IS WORKING!!!!
router.get('/', requestsController.getAllRequests);

// GET /status/:status - Get requests by status -- !this is not working
router.get('/status/:status', requestsController.getRequestsByStatus);

// GET /id/:id - Get requests by ID -- Positive
router.get('/id/:id', requestsController.getRequestsById);

// GET /date_publish/:date/:olderOrLater - Get requests by date published -- untested
router.get('/date_publish/:date', requestsController.getRequestsByDate);

// POST /create - Create a request -- mmmyeh, working
router.post('/create', requestsController.createRequest);

export default router;