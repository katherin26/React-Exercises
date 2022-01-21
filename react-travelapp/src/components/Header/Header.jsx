import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";

//import the style.js, the useStyles is a hook
import useStyles from "./styles";

const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  //We can find this in the google documentation.
  //The question is , what are we goona do when we get our new place.?? well we want to set it to the state.
  //More specifically we want to go back inside of the app and change the coordinates.
  //We can do that passing the setCoordinates as a prop in the Header tag

  //And in the Header we can use that setCoordinates and we can called inside onPlaceChanged({lat,lng}).
  //Now we need to connect the <Autocomplete/> to an api. But with {Autocomplete} from "@react-google-maps/api"
  // We have to do it , using a script tag in the public index.html
  //And we need to copy and paste the key inside the map in  the index.html.

  /* The autoComplete requires two props that need to be  passed into it, on thing is the onLoad
    handler , so what is going  to happen once we load the autocomplete component  , onPlaceChange
    handler */

  //<Autocomplete onLoad={} onPlaceChanged={}/>

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
