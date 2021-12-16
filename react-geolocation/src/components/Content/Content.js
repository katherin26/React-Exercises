import * as React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Form from "../Form/Form";
import Card from "../Card/Card";
import Map from "../Map/MapFn";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Content() {
  const [values, setValues] = React.useState({
    workout: "Cycling",
    distance: "",
    duration: "",
    cadence: "",
  });

  const [workouts, setWorkouts] = React.useState([]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(prop, event);
  };

  const handleAddNewWorkout = () => {
    if (
      values.workout &&
      values.distance &&
      values.duration &&
      values.cadence
    ) {
      setWorkouts([...workouts, values]);
    } else {
      console.log(`datanoready`);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <Form
              values={values}
              handleChange={handleChange}
              handleAddNewWorkout={handleAddNewWorkout}
            />
          </Item>
          <Item>
            {workouts.map((workout) => (
              <Card values={workout} />
            ))}
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <Map values={values} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
