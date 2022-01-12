import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ListComponent(props) {
  console.log(props);

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Mold Spores Level (0-50): {props.data.mold_level} spores.
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Air Quality (0 - 50) : {props.data.aqi}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Particulate Matter-10 (0-50) : {props.data.pm10} (μg/m3).
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Carbon Monoxide (0- 50): {props.data.co}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Type of Pollen : {props.data.predominant_pollen_type}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Sulfur Dioxide (0 - 0.10): {props.data.so2} ppm.
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Pollen level tree : {props.data.pollen_level_tree}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Pollen level weed : {props.data.pollen_level_weed}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Nitrogen Dioxide (0 - 50) : {props.data.no2} ppb.
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Particular Matter-2.5 (0 - 12.0) : {props.data.pm25} (μg/m3).
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Pollen level grass : {props.data.pollen_level_grass}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
