import { Router } from 'express';
const router = Router();
import userController from '../controllers/userController.js';
import requestsController from '../controllers/requestsController.js';

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
router.put('/changeUsername', userController.changeUsername);

// Working
router.put('/changePassword', userController.changePassword);

// Working
router.delete('/deleteAccount', userController.deleteAccount);

// Working
router.put('/superadmin/changePrivilege/:id', userController.updatePrivilege);

// Working
router.post('/admin/activities/create', userController.createActivity);

// Working
router.put('/admin/activities/update/:id', userController.updateActivity);

// Working
router.delete('/admin/activities/delete/:id', userController.deleteActivity);

// Working
router.get('/admin/requests/status/:status', requestsController.getRequestsByStatus);

// Working
router.put('/admin/requests/status/update/:id', userController.updateRequestStatus);

export default router;