import * as React from "react";
import Button from "@mui/material/Button";

function ButtonComponent(props) {
  return (
    <>
      <Button variant="contained" onClick={props.fn}>
        Get Weather
      </Button>
    </>
  );
}

export default ButtonComponent;
