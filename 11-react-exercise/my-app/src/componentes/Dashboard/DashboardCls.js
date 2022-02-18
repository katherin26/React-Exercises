import "./Dashboard.css";
import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as axios from "axios";

export default class DashboardCls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      search: "",
    };
  }

  async searchHandler() {
    console.log("Searching...", this.state.search);
    const response = await axios.get(
      `https://forkify-api.herokuapp.com/api/search?q=${this.state.search}`
    );
    this.setState({ recipes: response.data.recipes });
  }

  render() {
    return (
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            id="outlined-basic"
            label="recipe"
            variant="outlined"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
          />
          <Button variant="contained" onClick={this.searchHandler.bind(this)}>
            Search
          </Button>
        </Box>
        <ul>
          {this.state.recipes.map((r) => (
            <li key={r.recipe_id}>{r.title}</li>
          ))}
        </ul>
      </Container>
    );
  }
}
