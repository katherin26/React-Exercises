import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ButtonComponent from "../Button/Button";
import ListComponent from "../List/List";

function Content() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <ButtonComponent />
        <ListComponent />
      </Box>
    </Container>
  );
}

export default Content;
