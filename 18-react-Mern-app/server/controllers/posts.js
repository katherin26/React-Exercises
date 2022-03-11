/*Inside this folder we are going to create all the handlers for our routes.
and then import them to routes posts.js
First of all: Each callback function is going to have a try and catch block, the code in the catch is gonna happen
if we get an error right there and the code in the try is going to happen if everything is successfull .
So in the try we need to retrieve all the posts that we currently have in the database.
*/

import Mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
//NOTE: It's gonna be the limit of posts per page.
//NOTE: StartIndex on a post on a specific page for example, The start INDEX of the first post on the third
//page would be 8 + 8 + 8 -1 because we start from 0. and that would be 23.
//First we need to convert our page into a Number using the number constructor even though the page is a number
//on the front end when we pass it through the reg.query it becomes a string so we have to convert it back.
//and know we are simply going to deduct -1 from that. and finally multiply all of that by the limit.
//In this way we're always going to get the start index of the post on a specific page.
//NOTE: sort() = the post to the newest to the oldest and sort them by id. and the limit is 8.
//Know we are passing all this data back to the front end, go to actions / posts.js

export const getPosts = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT; //get the starting index of every page.
    const total = await PostMessage.countDocuments({});
    const posts = await PostMessage.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: posts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
/*NOTE: 
  QUERY => /posts?page=1 => page = 1
  PARAMS => /posts/123 => id = 123

  Both ways are fully okay usually we use query, if you want to query some data like search and we 
  use params, if you want to get some specific resource like posts and then forward /id of the post.

  NOTE: i => ignore case : that means if you search for something like : Test test TEST => test is the same.
    We converted it into a regular expression in the first place because that way it's easier for mongodb and 
    mongoose to search the database.
    FIND= ${$or} that or stands for either find me the title or find me the tags, we want to find the posts
    that match either or so we can make that into an array. and then the first thing there is going to be, 
    the [{title}], the second thing in that array is gonna be tags, keep in mind there is an array of 
    tags. So inside of there we are going to open another object and we are gonna say = ${in}, is there 
    a tag in this specific array of tags  that matches our query. in there we can say ${in: tags.split(',')}
*/

export const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;
  try {
    const title = new RegExp(searchQuery, "i");
    const posts = await PostMessage.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });

    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostMessage.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  console.log(`creating post ${post}`);
  const newPostMessage = new PostMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!Mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatePost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );
  res.json(updatePost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!Mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with that id.`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};

/*NOTE: Now we need to modify it so that the users can only like the post once.
  if user is even authenticated we can do that because we have that special value
  and that is req.userId.
  IF NOT req.userId return res.json({message:  'Unanthenticated'})
  if we call a middleware like this before a specific action like in this case: 

  router.delete('/:id', auth, deletePost); ===> Then you can populate the request and then you'll
  have access to that request rigth into the next action that you have, so if we go into our 
  auth if we populate the request.userId if we populate the request.userId then we go 
  to the next controller in the row which is going to be the like post and now the request is 
  going to have that user id.  
  */

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.json({ message: "Unauthenticated" });

  if (!Mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  const post = await PostMessage.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    //like the post
    post.likes.push(req.userId);
  } else {
    //dislike the post
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatePost = await PostMessage.findByIdAndUpdate(
    id,
    post,

    { new: true }
  );
  res.json(updatePost);
};
