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
//In the url write console.cloud.google.com/projectcreate.com and create a new project.

//Now our map is going to be receiving different props,
//The question is , how are we going to know when the coordinates or bounds of the map change.
//and the answer: google map react will be doing that for us. we simply have to call a specific on change
//function.Inside the onChange we are getting a callback function that has the event inside of it.
//so right inside of there we can call these set coordinates and then inside of there we are going to set,
//it to an object that has the latitude property which is going to be equal to e.center.lat and also we need the ,
//lng property which is going to be equal to e.center.lng.

//The onChange property has an object with bounds(ne,nw,se,sw), center(lat:0, lng:0), marginBounds, size, zoom, [[prototype]]
//Places = We are passing the places so now inside of our map we can finally destructure them from the props.
//How do we actually show the pins on the map? = So let's open a new dynamic block and say places?.map((places)=>(

//)), we are getting a singular place right here , for each place we want to render a div and this div has to
//have a few properties. We're going to give it a class name in this case it's going to be classes.markerContainer.
//
//{Number(place.latitude)}  = We are getting these values as strings and in here they have to be numbers.
//So we can use the number constructor to convert these values into numbers.
//onChildClick() = is an event listener so we're going to have method that's going to listen for out events
//and whenever we clicked on a child we are going to get it as a parameter. Now we need to get the information
//about which child was click from the Map component all the way to out list component and how can we do that
//well we could create a child, so we are gonna used a method called lifting the state up , we create
//const [childClicked, setChildClicked] = useState(null); but we wanna take that state to the parent component
//In this case is App.js component.

//

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
  weatherData,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  //const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.small.url
                      : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bonappetit.com%2Fstory%2Frestaurants-are-hanging-by-a-thread-edward-lee&psig=AOvVaw1X6dhGAhphID0a_-Tq_x7P&ust=1642653017601000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLj0yL_9vPUCFQAAAAAdAAAAABAV"
                  }
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}

        {weatherData?.list?.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img
              height={100}
              src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
