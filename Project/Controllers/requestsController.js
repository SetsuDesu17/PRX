const Request = require('../models/requestsModel');

const requestsController = {
  getAllRequests: async (req, res) => {
    try {
      const requests = await Request.getRequests();
      res.json({ success: true, data: requests });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error fetching requests', error: error.message });
    }
  },

  getRequestsById: async (req, res) => {
    try {
      const request = await Request.getRequestsById(req.params.id);
      if (!request) return res.status(404).json({ success: false, message: 'Request not found' });
      res.json({ success: true, data: request });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error fetching request', error: error.message });
    }
  },

  getRequestsByStatus: async (req, res) => {
    try {
      const requests = await Request.getRequestsByStatus(req.params.status);
      res.json({ success: true, data: requests });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error fetching requests by status', error: error.message });
    }
  },

  createRequest: async (req, res) => {
    try {
      const { requestHeader, activityName, activityType, activitySubject, activityDeadline, activityDescription, requestPublished, requestPublisher, requestDescription, requestStatus } = req.body;
      if (!requestHeader || !activityName || !activityType || !requestPublisher || !requestStatus) {
        return res.status(400).json({ success: false, message: 'Required fields missing' });
      }
      const newRequest = await Request.createRequest({
        requestHeader, activityName, activityType, activitySubject, activityDeadline,
        activityDescription, requestPublished, requestPublisher, requestDescription, requestStatus
      });
      res.status(201).json({ success: true, message: 'Request created successfully', data: newRequest });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error creating request', error: error.message });
    }
  },

  updateRequestStatus: async (req, res) => {
    try {
      const requestId = req.params.id;
      const newStatus = req.body.requestStatus;
      const existingRequest = await Request.getRequestsById(requestId);
      if (!existingRequest) return res.status(404).json({ success: false, message: 'Request not found' });
      await Request.updateRequestStatus(requestId, newStatus);
      res.json({ success: true, message: 'Request status updated successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error updating request status', error: error.message });
    }
  }
};

module.exports = requestsController;
