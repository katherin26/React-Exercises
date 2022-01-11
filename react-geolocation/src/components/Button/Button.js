import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonComponent(props) {
  return (
    <>
      <Button variant="contained" onClick={props.fn}>
        Get Air Quality
      </Button>
    </>
  );
}