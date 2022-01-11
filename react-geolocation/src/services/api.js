import axios from "axios";

const apiUrl = `http://localhost:3001`;

export function getWorkouts() {
  return axios.get(`${apiUrl}/workouts`);
}

export function createWorkout(workout) {
  return axios.post(`${apiUrl}/workouts`, workout);
}

export async function getAirQuality(lat, lon) {
  const response = await axios.get(
    `https://air-quality.p.rapidapi.com/current/airquality`,
    {
      params: {
        lat,
        lon,
      },
      headers: {
        "x-rapidapi-host": "air-quality.p.rapidapi.com",
        "x-rapidapi-key": "7b760b1092mshe837c1179b68733p13c26bjsn905c8dda768f",
      },
    }
  );
  return response.data;
}
