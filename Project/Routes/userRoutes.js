import { Router } from 'express';
const router = Router();
import userController from '../controllers/userController.js';

// Working
router.get('/', userController.getCurrentUser);

// Working
router.post('/signIn', userController.signIn);

// Working
router.get('/logIn', userController.logIn);

// Working
router.get('/logOut', userController.logOut);

// Working
router.get('/:id', userController.getUserById);

// Working
router.put('/changeUsername/:id', userController.updateUsername);

// Working
router.put('/changePassword/:id', userController.updatePassword);

// Working
router.delete('/deleteAccount/:id', userController.deleteAccount);

// Working
router.put('/superadmin/changePrivilege/:id', userController.updatePrivilege);

// create activity
router.post('/admin/activities/add', userController.createActivity);

//update activity
router.put('/admin/activities/update/:id', userController.updateActivity);

//delete activity
router.delete('/admin/activites/delete/:id', userController.deleteActivity);

//get request by status
router.get('/admin/requests/status/:id', userController.getRequestsByStatus);

//update request status
router.put('/admin/requests/status/:id/update/:status', userController.updateRequestStatus);

export default router;