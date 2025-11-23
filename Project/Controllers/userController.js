import User from '../models/userModel.js';
import Activities from '../models/activitiesModel.js';
import Request from '../models/requestsModel.js';

const userController = {
    //Signin = Username, Password
    signIn: async (req, res) => {
    try {
      const { username, password } = req.body;

      // Validation
      if (!username || !password) {
        return res.status(400).json({
          success: false,
          message: 'All fields (username, password) are required'
        });
      }

      const newSignin = await User.signIn(req.body);

      res.status(201).json({
        success: true,
        message: 'Signed-in successfully',
        data: newSignin
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error Signing-in',
        error: error.message
      });
    }
  },

  logIn: async (req, res) => {
    try {
      const { username, password } = req.body;
      await User.logOut();
      const updateUserStatus = await User.updateOnlineStatus(username, password);
      if (!updateUserStatus){
        res.status(500)({ success: false, message: "Error Logging-in", error: error.message });
      }
      const user = await User.logIn(username, password);
      if (user){
        res.json({ success: true, data: user });
      }
      
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error Logging-in', error: error.message });
    }
  },

  logOut: async (req, res) => {
    try {
      const user = await User.logOut();
      res.json({ success: true, data: user });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error Logging-Out', error: error.message });
    }
  },

  getCurrentUser: async (req, res) => {
    try {
      const user = await User.getCurrentUser();
      res.json({ success: true, data: user });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error Logging-in', error: error.message });
    }
  },

  //getUser = getCurrentUser
  getUserById: async (req, res) => {
    try {
      const user = await User.getUserById(req.params.id);
      if (!user) return res.status(404).json({ success: false, message: 'User not found' });
      res.json({ success: true, data: user });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error fetching User', error: error.message });
    }
  },

  //change username
  updateUsername: async (req, res) => {
    try {
      const { username } = req.body;
      const userId = req.params.id;

      // Check if student exists
      const existingUser = await User.getUserById(userId);
      if (!existingUser) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      // Validation
      if (!username) {
        return res.status(400).json({
          success: false,
          message: 'Current fields (Username) is required'
        });
      }

      await User.updateUsername(userId, {
        username
      });

      res.json({
        success: true,
        message: 'Username updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error updating Username',
        error: error.message
      });
    }
  },

  //change password
  updatePassword: async (req, res) => {
    try {
      const { password } = req.body;
      const userId = req.params.id;

      // Check if student exists
      const existingUser = await User.getUserById(userId);
      if (!existingUser) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      // Validation
      if (!password) {
        return res.status(400).json({
          success: false,
          message: 'Current fields (Password) is required'
        });
      }

      await User.updatePassword(userId, {
        password
      });

      res.json({
        success: true,
        message: 'Password updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error updating Password',
        error: error.message
      });
    }
  },

  //Delete Account = login(Username, Password)
  deleteAccount: async (req, res) => {
    try {
      const userId = req.params.id;

      // Check if student exists
      const existingUser = await User.getUserById(userId);
      if (!existingUser) {
        return res.status(404).json({
          success: false,
          message: 'Account not found'
        });
      }

      await User.deleteAccount(userId);

      res.json({
        success: true,
        message: 'Account deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error deleting Account',
        error: error.message
      });
    }
  },

  //changePrivilage
  updatePrivilege: async (req, res) => {
    try {
      const { userPrivilege } = req.body;
      const userId = req.params.id;

      // Check if account exists
      const existingUser = await User.getUserById(userId);
      if (!existingUser) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      const checkIfCurrentUserIsSuperAdmin = await User.checkIfCurrentUserIsSuperAdmin();
      if (!checkIfCurrentUserIsSuperAdmin) {
        return res.status(404).json({
          success: false,
          message: 'Current User Lacks the Valid Privilege'
        });
      }

      // Validation
      if (!userPrivilege) {
        return res.status(400).json({
          success: false,
          message: 'Current fields (userPrivilege) is required'
        });
      }

      await User.updatePrivilege(userId, userPrivilege);

      res.json({
        success: true,
        message: 'Privilege updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error updating Privilege',
        error: error.message
      });
    }
  },

  //addActivity
  createActivity: async (req, res) => {
    try {
      const { id, activityName, activityType, activitySubject, activityDeadline, activityPublished, activityPublisher,  activityStatus, activityDescription } = req.body;

      // Validation
      if (!id || !activityName || !activityType || !activitySubject || !activityDeadline || !activityPublished || !activityPublisher || !activityStatus || !activityDescription) {
        return res.status(400).json({
          success: false,
          message: 'All fields (id, activityName, activityType, activitySubject, activityDeadline, activityPublished, activityPublisher,  activityStatus, activityDescription) are required'
        });
      }

      const newActivity = await Activities.create({
        id, 
        activityName, 
        activityType, 
        activitySubject, 
        activityDeadline, 
        activityPublished, 
        activityPublisher,  
        activityStatus, 
        activityDescription
      });

      res.status(201).json({
        success: true,
        message: 'Actiity Created successfully',
        data: newActivity
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error creating Activity',
        error: error.message
      });
    }
  },

  //updateActivity
  updateActivity: async (req, res) => {
    try {
      const { id, activityName, activityType, activitySubject, activityDeadline, activityPublished, activityPublisher,  activityStatus, activityDescriptionassword } = req.body;
      const activityId = req.params.id;

      // Check if student exists
      const existingActivity = await Activities.getById(activityId);
      if (!existingActivity) {
        return res.status(404).json({
          success: false,
          message: 'Activity not found'
        });
      }

      // Validation
      if (!id || !activityName || !activityType || !activitySubject || !activityDeadline || !activityPublished || !activityPublisher || !activityStatus || !activityDescription) {
        return res.status(400).json({
          success: false,
          message: 'All fields (id, activityName, activityType, activitySubject, activityDeadline, activityPublished, activityPublisher,  activityStatus, activityDescription) are required'
        });
      }

      await User.update(userId, {
        id, 
        activityName, 
        activityType, 
        activitySubject, 
        activityDeadline, 
        activityPublished, 
        activityPublisher,  
        activityStatus, 
        activityDescription
      });

      res.json({
        success: true,
        message: 'Activity updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error updating Activity',
        error: error.message
      });
    }
  },

  //Delete Activity
  deleteActivity: async (req, res) => {
    try {
      const activityId = req.params.id;

      // Check if student exists
      const existingUser = await Activities.getById(activityId);
      if (!existingUser) {
        return res.status(404).json({
          success: false,
          message: 'activity not found'
        });
      }

      await User.delete(userId);

      res.json({
        success: true,
        message: 'Activity deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error deleting Activity',
        error: error.message
      });
    }
  },

  //getRequestsByStatus
  getRequestsByStatus: async (req, res) => {
    try {
      const { status } = req.params;
      const requestId = await Request.getByStatus(status);
      
      res.json({
        success: true,
        data: requestId
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching Request by status',
        error: error.message
      });
    }
  },

  //updateRequestStatus
  updateRequestStatus: async (req, res) => {
    try {
      const { requestStatus } = req.body;
      const requestId = req.params.id;

      // Check if student exists
      const existingRequest = await Request.getById(requestId);
      if (!existingRequest) {
        return res.status(404).json({
          success: false,
          message: 'Request not found'
        });
      }

      // Validation
      if (!requestId) {
        return res.status(400).json({
          success: false,
          message: 'Current field (requestStatus) is required'
        });
      }

      await Request.update(requestId, {
        requestStatus
      });

      res.json({
        success: true,
        message: 'Request Status updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error updating Request Status',
        error: error.message
      });
    }
  }
}

export default userController;
