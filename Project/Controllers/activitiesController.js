import Activity from '../models/activitiesModel.js';

const activitiesController = {
  getAllActivity: async (req, res) => {
    try {
      const activities = await Activity.getAllActivity();
      res.json({ success: true, data: activities });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error fetching activities', error: error.message });
    }
  },

  getActivitiesById: async (req, res) => {
    try {
      const activity = await Activity.getActivitiesById(req.params.id);
      if (!activity) return res.status(404).json({ success: false, message: 'Activity not found' });
      res.json({ success: true, data: activity });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error fetching activity', error: error.message });
    }
  },

  getActivitiesByDeadline: async (req, res) => {
    try {
      const { sort } = req.body;
      if (!sort){
        return res.status(400).json({
          success: false,
          message: 'Current Field (sort){olderThan/earlierThan} is Required'
        });
      } else if (sort != "olderThan" && sort != "earlierThan"){
        return res.status(400).json({
          success: false,
          message: 'sort Must be Either: "olderThan" or "earlierThan"'
        });
      }
      const requests = await Activity.getActivitiesByDeadline(req.params.date, sort);
      res.json({ success: true, data: requests });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error fetching activities by date', error: error.message });
    }
  },  

  getActivitiesByStatus: async (req, res) => {
    try {
      
      const activities = await Activity.getActivitiesByStatus(req.params.status);
      res.json({ success: true, data: activities });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error fetching activities by status', error: error.message });
    }
  },

  getActivitiesBySubject: async (req, res) => {
    try {
      const activities = await Activity.getActivitiesBySubject(req.params.subject);
      res.json({ success: true, data: activities });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error fetching activities by subject', error: error.message });
    }
  },

  getActivitiesByType: async (req, res) => {
    try {
      const activities = await Activity.getActivitiesByType(req.params.type);
      res.json({ success: true, data: activities });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error fetching activities by status', error: error.message });
    }
  },

  updateActivity: async (req, res) => {
    try {
      const activityId = req.params.id;
      const existingActivity = await Activity.getById(activityId);
      if (!existingActivity) return res.status(404).json({ success: false, message: 'Activity not found' });
      const { activityName, activityType, activitySubject, activityDeadline, activityPublished, activityPublisher, activityStatus, activityDescription } = req.body;
      if (!activityName || !activityType || !activityDeadline || !activityPublisher || !activityStatus) {
        return res.status(400).json({ success: false, message: 'Required fields missing' });
      }
      await Activity.update(activityId, {
        activityName, activityType, activitySubject, activityDeadline,
        activityPublished, activityPublisher, activityStatus, activityDescription
      });
      res.json({ success: true, message: 'Activity updated successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error updating activity', error: error.message });
    }
  },

  deleteActivity: async (req, res) => {
    try {
      const activityId = req.params.id;
      const existingActivity = await Activity.getById(activityId);
      if (!existingActivity) return res.status(404).json({ success: false, message: 'Activity not found' });
      await Activity.delete(activityId);
      res.json({ success: true, message: 'Activity deleted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error deleting activity', error: error.message });
    }
  }
};

export default activitiesController;
