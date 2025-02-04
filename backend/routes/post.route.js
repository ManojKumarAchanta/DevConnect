import express from "express";
import {
  createPost,
  commentOnPost,
  upvotePost,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";
import upload from "../middleware/upload.js"; // Middleware for image upload (multer)
// import verifyToken from "../middlewares/verifyToken.js"; // JWT token verification

const router = express.Router();

// Create a post with optional image upload
router.post("/create", upload.single("img"), createPost);

// Comment on a post
router.post("/comment", commentOnPost);

// Upvote a post
router.post("/upvote", upvotePost);

// Update a post (authorized only)
router.put("/update", updatePost);

// Delete a post (authorized only)
router.delete("/delete", deletePost);

export default router;
