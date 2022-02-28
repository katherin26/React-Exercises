import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

//Now we need to fetch the data from that global redux store, we can do that with the help of something
//known as selectors.So in there we are gonna to import useSelector from react-redux.

import useStyles from "../Posts/style";

function Posts() {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return (
    <>
      <div>Posts</div>
      <Post />
      <Post />
    </>
  );
}

export default Posts;
