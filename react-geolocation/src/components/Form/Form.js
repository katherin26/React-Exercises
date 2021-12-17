import * as React from "react";
import Box from "@mui/material/Box";

import OutlinedInput from "@mui/material/OutlinedInput";

import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

import MenuItem from "@mui/material/MenuItem";

import Button from "@mui/material/Button";

import { Select } from "@mui/material";

const workoutList = [
  {
    label: "Cycling",
    value: "Cycling",
  },
  {
    label: "Running",
    value: "Running",
  },
];

export default function Form({ values, handleChange, handleAddNewWorkout }) {
  const [workout, setWorkout] = React.useState("Workout");

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end" }}>
      <div>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <Select
            id="outlined-select-workout"
            label="Select"
            value={values.workout}
            onChange={handleChange("workout")}
          >
            {workoutList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-distance"
            value={values.distance}
            onChange={handleChange("distance")}
            endAdornment={<InputAdornment position="end">km</InputAdornment>}
            aria-describedby="outlined-distance-helper-text"
            inputProps={{
              "aria-label": "distance",
            }}
          />
          <FormHelperText id="outlined-distance-helper-text">
            Distance
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-duration"
            value={values.duration}
            onChange={handleChange("duration")}
            endAdornment={<InputAdornment position="end">min</InputAdornment>}
            aria-describedby="outlined-duration-helper-text"
            inputProps={{
              "aria-label": "duration",
            }}
          />
          <FormHelperText id="outlined-duration-helper-text">
            Duration
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-cadence"
            value={values.cadence}
            onChange={handleChange("cadence")}
            endAdornment={
              <InputAdornment position="end">Step/min</InputAdornment>
            }
            aria-describedby="outlined-cadence-helper-text"
            inputProps={{
              "aria-label": "cadence",
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">
            Cadence
          </FormHelperText>
        </FormControl>
      </div>
      <Button
        name="add"
        variant="contained"
        onClick={handleAddNewWorkout}
        sx={{ boxShadow: 1 }}
      >
        Add New
      </Button>
    </Box>
  );
}
