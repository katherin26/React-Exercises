import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles";
import { SettingsInputSvideo } from "@material-ui/icons";
import { getPlacesData } from "../../api";

//Type = 'restaurants"
//Type, setType, rating and setRating , we elevated the state on the parent which is App.js and pass
//the value by props. in case you have more depper levels is better use useContext hook or redux.
//The reason why is in this form in because we have access to Type and ratings and we can used them to
//get different data from our get places api , which is = useEffect(() => {
// setIsLoading(true);
//getPlacesData(bounds.sw,bounds.ne)
//   .then((data))...etc
//})// so as first parameter we are going to pass type = getplacesData(type,bounds.sw,bounds.ne)
//in that way our function know what data needs to fetch.

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]);

  //We want to use this useEffect every time that the places change , so we put places in the array
  /* useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => refs[i] || createRef());
    setElRefs(refs);
  }, [places]);

  console.log({ childClicked });*/

  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  console.log({ childClicked });

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
