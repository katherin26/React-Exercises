import React, { useState, useEffect } from "react";
import * as axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import PetsIcon from "@mui/icons-material/Pets";

function Dashboard() {
  const [message, setMessage] = useState();

  const messageHandler = async () => {
    console.log(`display message`, message);
    const response = await axios.get(`https://catfact.ninja/fact`);
    setMessage(response.data.fact);
  };

  function interval() {
    setTimeout(async () => {
      await messageHandler();
      console.log(`${message}`);
      interval();
    }, 3000);
  }

  useEffect(() => {
    interval();
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Button variant="contained" onClick={messageHandler}>
          Message
        </Button>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {message && (
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "pink" }}>
                  <PetsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={message} />
            </ListItem>
          )}
        </List>
      </Box>
    </Container>
  );
}

export default Dashboard;
