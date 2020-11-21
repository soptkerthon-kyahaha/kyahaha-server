const express = require("express");
const postController = require("../controllers/postController");
const postsRouter = express.Router();

// Create a post
postsRouter.post("/", postController.createPost);

// Get all posts
postsRouter.get("/", postController.readAllPosts);

// Get a post by ID
postsRouter.get("/:postId");

// Delete a post by ID
postsRouter.delete("/");

module.exports = postsRouter;
