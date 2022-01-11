import * as axios from "axios";

export async function getAirQuality() {
  const response = await axios.get(
    `https://air-quality.p.rapidapi.com/current/airquality`,
    {
      params: { lat: "30.779", lon: "-78.638", hours: "72" },
      headers: {
        "x-rapidapi-host": "air-quality.p.rapidapi.com",
        "x-rapidapi-key": "7b760b1092mshe837c1179b68733p13c26bjsn905c8dda768f",
      },
    }
  );
  return response.data;
}
