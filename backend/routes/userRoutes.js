import express from 'express';
const router = express.Router();
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from '../controllers/userController.js';
import {protect} from '../middleware/authMiddleware.js'

router.route('/').post(registerUser);
router.route('/auth').post(authUser);
router.route('/logout').post(logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)


export default router;