import React, { useState, useEffect } from "react";
//CssBaseline is from material ui : This is a component from material ui that simply normalizes
//the styles.
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData, getWeatherData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { SendTwoTone } from "@material-ui/icons";

//We are gonna called getPlacesData with an useEffect and at the end of the function we are gonna have
//the dependency array.
//If you leave this dependency array empty that means that the code inside of this function block will
//happen only at the start of the application.
//getPlacesData() return the restaurant's data.
//WE need to pass more information into getPlacesData() , so we are gonna create mosre useState.
//For set automatically  the coordinates to be the coordinates of the user's location , we need

//So as soon as the user launches the page we should be able to get their latitude and longitude, create a new
//Use effect and this one is only going to happen at the start and then we have the dependency array.
//To get the user coordinates we can use the built-in browser geolocation api.
//How can we get these places which are in the state inside of the app.jss?? we are going to pass them over:
//<List places={places}>
//<Map places={places}/> = This is for display the imgs into the map.
//NOTE: We are sending a lot of props from one component to another this is still okay because we're only
//sending it one level deep from our app to our map. But we're not sending it two or three levels deep
//whenever that happens for you is better to swich to using reddux or react context.

const App = () => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setfilteredPlaces] = useState([]);

  const [childClicked, setChildClicked] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({}); //all the corners in the map.
  const [isLoading, setIsLoading] = useState(false);

  //Elevating the state from List.jsx and we pass the value by props in <List type={type} etc ...>
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  //This useEffect happens at the start.
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  //Implement the filtering based on rating , to do that we are going to add one more useEffect.
  //This useEffect is going to change only when the rating changes.

  //This useEffect happens once type changes or coordinates or bounds.
  //if the place.rating is larger than current rating, if that is the case then we want to return that
  //specific place and we implemented in the <Map/> <List/> by props. So if we have filteredPlaces.length
  //? in that case we want to pass filteredPlaces but else we want to simply pass places.
  //Then again every time that we get new places data we have to reset our filtered places so , let's
  // say set filter places back to an empty array.
  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setfilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    if (bounds === null) return;
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);

      getWeatherData(coordinates.lat, coordinates.lng).then((data) =>
        setWeatherData(data)
      );

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setfilteredPlaces([]);
        setIsLoading(false);
      });
    }
  }, [type, bounds]); // If we want to this code be reran every time that the map changes we have to add the coordinates ,
  //rigth there and also the bounds

  console.log(places);
  console.log(filteredPlaces);
  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
