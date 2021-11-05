import "./Dashboard.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as axios from "axios";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";

function Dashboard() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const searchHandler = async () => {
    console.log("searching..........", search);
    const response = await axios.get(
      `https://forkify-api.herokuapp.com/api/search?q=${search}`
    );
    setRecipes(response.data.recipes);
  };

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="recipe"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          margin="none"
        />
        <Button variant="contained" onClick={searchHandler}>
          Search
        </Button>
      </Box>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {recipes.map((r) => (
          <ListItem key={r.recipe_id}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "pink" }}>
                <RestaurantIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={r.title} />
          </ListItem>
        ))}
      </List>

      <ul>
        {recipes.map((r) => (
          <li key={r.recipe_id}>
            {r.title} <RestaurantIcon />
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Dashboard;
