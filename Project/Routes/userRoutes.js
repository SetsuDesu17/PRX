import { Router } from 'express';
const router = Router();
import userController from '../controllers/userController.js';

router.get('/', userController.getCurrentUser)

//create new sign in
router.post('/signIn', userController.createSignin);

//get log in
router.get('/logIn/:username/:password', userController.logIn);

//get  by id
router.get('/:id', userController.getUserById);

//update name
router.put('/changeUsername/:id', userController.updateUsername);

//update password
router.put('/changePassword/:id', userController.updatePassword);

//delete account
router.delete('/deleteAccount/:id', userController.deleteAccount);

//update privilege
router.put('/superadmin/changePrivillege/:id', userController.updatePrivilege);

//create activity
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