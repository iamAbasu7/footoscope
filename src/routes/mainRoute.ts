import { Router } from "express";
const router = Router();
import {viewBlogs,createBlogs} from '../controllers/user.controllers'


router.get("/admin/blog", viewBlogs)
router.post("/admin/blog",createBlogs);

// router.post("/user",createUser);
// router.delete("/user",deleteUser);
// router.put("/user",updateUser);

export default router