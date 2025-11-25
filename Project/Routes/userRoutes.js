import { Router } from 'express';
const router = Router();
import userController from '../controllers/userController.js';
import requestsController from '../controllers/requestsController.js';


router.get('/', userController.getCurrentUser);


router.post('/signIn', userController.signIn);


router.get('/logIn', userController.logIn);


router.get('/logOut', userController.logOut);


router.get('/:id', userController.getUserById);


router.put('/changeUsername', userController.changeUsername);


router.put('/changePassword', userController.changePassword);


router.delete('/deleteAccount', userController.deleteAccount);


router.put('/superadmin/changePrivilege/:id', userController.updatePrivilege);


router.post('/admin/activities/create', userController.createActivity);


router.put('/admin/activities/update/:id', userController.updateActivity);


router.delete('/admin/activities/delete/:id', userController.deleteActivity);


router.get('/admin/requests/status/:status', requestsController.getRequestsByStatus);


router.put('/admin/requests/status/update/:id', userController.updateRequestStatus);

export default router;