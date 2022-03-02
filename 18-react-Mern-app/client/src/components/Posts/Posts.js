import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

//Now we need to fetch the data from that global redux store, we can do that with the help of something
//known as selectors.So in there we are gonna to import useSelector from react-redux.
// diferent to posts.length > <CircularProgress/> : ( <Grid></Grid> ) If there not post.length then show CircularProgress else

import useStyles from "../Posts/style";

function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="strech"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
