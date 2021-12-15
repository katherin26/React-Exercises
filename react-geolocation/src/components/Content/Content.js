import * as React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Form from "../Form/Form";
import Card from "../Card/Card";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <Form />
          </Item>
          <Item>
            <Card />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>map</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
