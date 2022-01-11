import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ButtonComponent from "../Button/Button";
import ListComponent from "../List/List";
import { getAirQuality } from "../../services/api";

function Content() {
  const [list, setList] = React.useState();

  const listHandler = async () => {
    const result = await getAirQuality();
    setList(result.data[0]);
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <ButtonComponent fn={() => listHandler()} />
        <ListComponent data={list} />
      </Box>
    </Container>
  );
}

export default Content;
