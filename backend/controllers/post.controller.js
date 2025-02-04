import Post from "../models/post.model.js";
import { v2 as cloudinary } from "cloudinary"; // Cloudinary configuration
import User from "../models/user.model.js"; // User model to verify the post's author

// Middleware to check if the user is authorized to update or delete a post
const checkAuthorization = async (postId, userId) => {
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");
  if (post.user.toString() !== userId)
    throw new Error("Not authorized to edit or delete this post");
};

// Create a new post with optional image upload
export const createPost = async (req, res) => {
  try {
    const { text } = req.body;
    const userId = req.user.id; // Extract user ID from JWT

    if (!text) {
      return res.status(400).json({ msg: "Post text is required" });
    }

    let imageUrl = "";
    if (req.file) {
      // If there is an image, upload to Cloudinary
      const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
        folder: "devconnect/posts",
      });
      imageUrl = uploadedImage.secure_url;
    }

    // Create and save the new post
    const newPost = new Post({
      user: userId,
      text,
      img: imageUrl,
    });

    await newPost.save();

    return res
      .status(201)
      .json({ msg: "Post created successfully", post: newPost });
  } catch (err) {
    return res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

// Comment on a post
export const commentOnPost = async (req, res) => {
  try {
    const { postId, text } = req.body;
    const userId = req.user.id;

    if (!text) {
      return res.status(400).json({ msg: "Comment text is required" });
    }

    // Find the post and add a comment
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    const newComment = {
      user: userId,
      text,
    };

    post.comments.push(newComment);
    await post.save();

    return res.status(200).json({ msg: "Comment added", post });
  } catch (err) {
    return res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

// Upvote a post
export const upvotePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const userId = req.user.id;

    // Find the post
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    // Check if the user has already upvoted
    if (post.upvotes.includes(userId)) {
      return res
        .status(400)
        .json({ msg: "You have already upvoted this post" });
    }

    // Add the upvote
    post.upvotes.push(userId);
    await post.save();

    return res.status(200).json({ msg: "Post upvoted successfully", post });
  } catch (err) {
    return res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

// Update a post (only by the author)
export const updatePost = async (req, res) => {
  try {
    const { postId, text } = req.body;
    const userId = req.user.id;

    if (!text) {
      return res.status(400).json({ msg: "Text is required to update post" });
    }

    // Check if the user is authorized to update the post
    await checkAuthorization(postId, userId);

    const post = await Post.findByIdAndUpdate(
      postId,
      { text },
      { new: true } // Return the updated post
    );

    return res.status(200).json({ msg: "Post updated successfully", post });
  } catch (err) {
    return res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

// Delete a post (only by the author)
export const deletePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const userId = req.user.id;

    // Check if the user is authorized to delete the post
    await checkAuthorization(postId, userId);

    const post = await Post.findByIdAndDelete(postId);

    return res.status(200).json({ msg: "Post deleted successfully", post });
  } catch (err) {
    return res.status(500).json({ msg: "Server Error", error: err.message });
  }
};
