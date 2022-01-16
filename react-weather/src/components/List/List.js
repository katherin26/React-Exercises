import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ListComponent(props) {
  console.log(`props`);
  console.log(props);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          timeZone: {props.data.timezone}
        </Typography>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          City : {props.data.city_name}.
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Sunset: {props.data.sunrise}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Sunset: {props.data.sunset}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Weather : {props.data.weather.description}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Icon : {props.data.weather.icon}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ListComponent;
