import express from 'express';
import { handleGetPosts, handleCreatePost } from '../controllers/Posts.js';

const router = express.Router();

router.get('/', handleGetPosts);
router.post('/', handleCreatePost);

export default router;