import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

//Now we need to fetch the data from that global redux store, we can do that with the help of something
//known as selectors.So in there we are gonna to import useSelector from react-redux.
// diferent to posts.length > <CircularProgress/> : ( <Grid></Grid> ) If there not post.length then show CircularProgress else

import useStyles from "../Posts/style";

function Posts({ setCurrentId }) {
  const { posts, isLoading } = useSelector((state) => state.posts); // [] => {posts: []}

  const classes = useStyles();

  if (!posts?.length && !isLoading) return "No posts";

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts?.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
