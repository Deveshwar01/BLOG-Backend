import express from "express";
import {
    Login,
    getMyProfile,
    Register,
    Logout,
    getAllBlogUser
} from '../controllers/Users.js';
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post('/new', Register);
router.post('/login', Login);
router.get('/logout', Logout);
// router.get('/me',isAuthenticated, getMyProfile);
router.get('/allblogs', getAllBlogUser);

export default router;
