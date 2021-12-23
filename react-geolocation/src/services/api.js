import axios from "axios";

const apiUrl = `http://localhost:3001`;

export function getWorkouts() {
  return axios.get(`${apiUrl}/workouts`);
}

export function createWorkout(workout) {
  return axios.post(`${apiUrl}/workouts`, workout);
}
