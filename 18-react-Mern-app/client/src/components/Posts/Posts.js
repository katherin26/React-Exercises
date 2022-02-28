import React from "react";
import Post from "./Post/Post";
import useStyles from "../Posts/style";

function Posts() {
  const classes = useStyles();
  return (
    <>
      <div>Posts</div>
      <Post />
      <Post />
    </>
  );
}

export default Posts;
