import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Pagination from "../Pagination/Pagination";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "../../styles.js";
import ChipInput from "material-ui-chip-input";

/*NOTE: with useDispatch= we used this for dispatch an action. We need to define that dispatch so we need
say, const this patch is equal to use dispatch that is a hook, now that we have access to this dispatch we need
to find a way where we are actually going to dispatch the action and the best way to do that is inside of
the useEffect()
//NOTE: ChipInput is a normal input but it works great for tags, because all the words are display in chips
also have to set up our url search params we're going to use that to know on which page are we currently on 
and what search term are we looking for.

//NOTE: query is where we'll be getting our page info from so you can say something like const page is =
to query.get and then in here we can say page , so this going to read our url and see if we have a page 
parameter in there, if so it's going to populate this variable or 1, if we don't have the page we must 
be on the first one.

Finally we are going to have a search query, so we can say : const searchQuery = query.get('searchQuery);


u
*/

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const location = useLocation();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              {" "}
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
