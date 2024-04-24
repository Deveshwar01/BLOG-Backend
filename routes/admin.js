import express, { Router } from "express"
import { createPost, deletePost, getAllUsers, updatePost , getAllBlog} from "../controllers/admin.js";

const router = express.Router();

router.post("/create", createPost);
router.delete("/delete/:Id", deletePost);
router.get("/allblog", getAllBlog);
router.patch("/update/:Id", updatePost);

export default router;