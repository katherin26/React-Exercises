import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, history) => async (dispatch) => {
  try {
    history.push("/");
  } catch {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    history.push("/");
  } catch {
    console.log(error);
  }
};
