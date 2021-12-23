import React, { useState, useEffect } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Form from "../Form/Form";
import Card from "../Card/Card";
import Map from "../Map/MapFn";

//esta function me va a retornar lo que me devuelva el api en el backend.
import { getWorkouts, createWorkout } from "../../services/api";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Content() {
  const [values, setValues] = useState({
    workout: "Cycling",
    distance: "",
    duration: "",
    cadence: "",
  });

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const [workouts, setWorkouts] = useState([]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(prop, event);
  };

  const updateLocation = (lat, lng) => {
    setLongitude(lng);
    setLatitude(lat);
  };

  const loadWorkouts = async () => {
    try {
      const response = await getWorkouts();
      console.log(response);
      setWorkouts(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddNewWorkout = async () => {
    try {
      if (
        values.workout &&
        values.distance &&
        values.duration &&
        values.cadence
      ) {
        const response = await createWorkout({
          ...values,
          latitude,
          longitude,
        });
        console.log(response);
        await loadWorkouts();
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadWorkouts();
    console.log(`something change`);
  }, []); //cargar todos los workouts que estan en el servidor una vez. cuando se monta el content component.

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
            {workouts.map((workout, i) => (
              <Card key={i} values={workout} />
            ))}
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <Map
              values={values}
              latitude={latitude}
              longitude={longitude}
              updateLocation={updateLocation}
              markers={workouts}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
