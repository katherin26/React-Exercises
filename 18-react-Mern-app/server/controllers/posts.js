/*Inside this folder we are going to create all the handlers for our routes.
and then import them to routes posts.js
First of all: Each callback function is going to have a try and catch block, the code in the catch is gonna happen
if we get an error right there and the code in the try is going to happen if everything is successfull .
So in the try we need to retrieve all the posts that we currently have in the database.
*/

import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
