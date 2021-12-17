import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import RunCircleIcon from "@mui/icons-material/RunCircle";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function AppCard({ values }) {
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
        </CardContent>
      </Card>
    </Box>
  );
}
