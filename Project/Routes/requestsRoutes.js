const express = require('express');
const router = express.Router();
const requestsController = require('../Controllers/requestsController');

// GET /api/requests - Get requests
router.get('/api/requests', requestsController.getRequests);

// GET /api/requests/status/:status - Get requests by status
router.get('api/requests/status/:status', requestsController.getRequestsByStatus);

// GET /api/requests/id/:id - Get requests by ID
router.get('api/requests/id/:id', requestsController.getRequestsByID);

// GET /api/requests/date_publish/:date/:olderOrLater - Get requests by date published
router.get('/api/requests/date_publish/:date/:olderOrLater', requestsController.getRequestsByDatePublished);

// POST /api/requests/create - Create a request
router.post('/api/requests/create', requestsController.createRequest);

module.exports = router;