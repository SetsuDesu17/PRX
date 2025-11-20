const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const requestController = require('../Controllers/requestsController');
const activitiesController = require('../Controllers/activitiesController');

//create new sign in
router.post('/api/signIn', userController.createSignin);

//get log in
router.get('/api/logIn', userController.getLogin);

//get user by id
router.get('/api/user/:id', userController.getUserById);

//update username
router.put('/api/user/changeUsername/:id', userController.updateUsername);

//update password
router.put('/api/user/changePassword/:id', userController.updatePassword);

//delete account
router.delete('/api/user/deleteAccount/:id', userController.deleteAccount);

//update privilege
router.put('/api/superadmin/changePrivillege/:id', userController.updatePrivilege);

//create activity
router.post('/api/admin/activities/add', activitiesController.createActivity);

//update activity
router.put('/api/admin/activities/update/:id', activitiesController.updateActivity);

//delete activity
router.delete('/api/admin/activites/delete/:id', activitiesController.deleteActivity);

//get request by status
router.get('/api/admin/requests/status/:id', requestController.getRequestsByStatus);

//update request status
router.put('/api/admin/requests/status/:id/update/:status', requestController.updateRequestStatus);

module.exports = router;