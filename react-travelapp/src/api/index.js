//We are gonna keep all of our api calls.

import axios from "axios";

/*getPlacesData is the function who is gonna make the call, and is going to be an async function.
Inside of there we are going to have a try and catch block inside of the try block we usually have a 
request and if that request is successful then the code runs as it's supposed to run inside of the try 
 but if the request fails then our code is redirected to the catch error block */

/*Type = When we use type like parameter in getPlacesData  our function is going to know what data it needs
to fetch so inside the URL , we inject the ${type} parameter and in that way if we have hotels it's going 
to be hotels  , if we have attractions  is going to be attractions , this simple change made our code dynamic.
And we have to add our type to the dependency [type,coordinates, bounds] in the getPlacesData().
*/

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY,
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      "https://community-open-weather-map.p.rapidapi.com/weather",
      {
        params: { lat: lat, lon: lng },
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
