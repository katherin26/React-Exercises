import express from "express";
//import { getPostsBySearch } from "../../client/src/actions/posts.js";
import {
  getPostsBySearch,
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();

//Our first route is going to be router.get, the path is just going to be / then in here we can specify a callback
//function that is going to be executed once someone visits localhost 5000. Now we can go ahead in index.js and
//import that router which we just exported from there to do that we have to do import postRoutes from './routes/posts.js'
//Now we can use express middleware to connect this to our application to do that we have to type app.use.
//and for the first parameter set up the starting path for all the routes inside of the post.js and that thing is
//going to be posts and in here we set the routes so what this did is said that every route inside of the post
//routes is going to start with posts that means that this route inside of posts is not reached by going to localhost
//5000 and then / it's reachead by going to localhost 5000 and then / posts. Because we added that prefix of posts
//to all routes in here.

//http://localhost:5000/posts
//Patch is for updating existing documents, for editing we need to know the id.

/*MIDDLEWARE = We wanna added it before specific actions. for example all of the users no matter
 if they're logged in or not they can see all the posts but to create a post you need to have 
 your own id, you need to be logged in. */

router.get("/search", getPostsBySearch);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost); //this is going to be managed in the frontend.
router.delete("/:id", auth, deletePost); //this is going to be managed in the frontend.
router.patch("/:id/likePost", auth, likePost);

export default router;
