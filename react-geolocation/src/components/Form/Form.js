import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    amount: "",
    distance: "",
    duration: "",
    cadence: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [currency, setCurrency] = React.useState("EUR");

  const handleChange2 = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={currency}
            onChange={handleChange}
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
    </Box>
  );
}
