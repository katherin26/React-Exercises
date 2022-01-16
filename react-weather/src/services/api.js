import * as axios from "axios";

export async function getWeather() {
  const response = await axios.get(
    `https://weatherbit-v1-mashape.p.rapidapi.com/current`,
    {
      params: {
        lat: "35.5",
        lon: "-78.5",
      },
      headers: {
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
        "x-rapidapi-key": "7b760b1092mshe837c1179b68733p13c26bjsn905c8dda768f",
      },
    }
  );
  return response.data;
}
