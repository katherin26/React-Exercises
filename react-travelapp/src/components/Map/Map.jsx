import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

//This meas that this is mobile variable is going to be set to false if the width of the device is larger
//than 600 pixels
//GoogleMapReact is not going to be a self-closing component and we're gonna have quite a few props we want
//to pass to it. inside key we can specify the google maps key to get our key we will have to create a
//new project on google developers console.
//In the url write console.cloud.google.com/projectcreate.com 

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={{50,50,50,50}}
        options={''}
        onChange={''}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
