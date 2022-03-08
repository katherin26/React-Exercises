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
import { getPosts, getPostsBySearch } from "../../actions/posts";
import Pagination from "../Pagination/Pagination";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

import useStyles from "./styles";
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

Inside  the value we need to add the state , we need to add const [search,SetSearch] and add the search into the value.

UseEffect = useDispatch 
we need to tell the database to only return us the posts that match, our query to send a nice message to the 
database. we can use redux, first let's create a redux action and a reducer to manage our posts.

Dispatch is the verb that we use with actions, so to have something to dispatch we need to create an action 
for searching the posts. to do that we can open up our file explorer go to actions / posts then inside of there
just below our previous get posts we want to create an action called get post by search.
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
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  /*NOTE: Inside the getPostsBySearch we add search, and tags: which we habe to render into a string
  because we cannot pass an array through the url parameters, because of that we are gonna do : tags is
  equal to tags.join and we are going to join them by a comma , that way if we have an array of something
  like : [europe, usa] => 'europe,usa' in that way is going to be more easily to pass the data from the 
  front end to the back end .*/

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
    } else {
      navigation("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  //NOTE:When you have an array as the state, you first have to spread the previous tags and then add the new tag onto it.
  const handleAdd = (tag) => setTags([...tags, tag]);
  //NOTE: We want to filter out the tag to delete, so we can say : if tag is not equal to tagToDelete
  const handleDelete = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          className={classes.mainContainer}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={7} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Memories"
                onKeyPress={handleKeyPress}
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search tags"
                variant="outlined"
              />
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                color="primary"
                variant="contained"
              >
                Search
              </Button>
            </AppBar>
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
