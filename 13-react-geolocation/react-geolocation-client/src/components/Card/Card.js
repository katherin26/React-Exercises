import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import RunCircleIcon from "@mui/icons-material/RunCircle";

export default function AppCard({ values }) {
  console.log(values);
  console.log(`values`);
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ mb: 1.5, fontWeight: "bold" }} color="text.primary">
            <RunCircleIcon color="primary" />
            {values.workout}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {values.distance} Km - {values.duration} Min - {values.cadence}{" "}
            Cadence
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Air Quality : {values.airQuality.aqi}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
