import { AUTH, LOGOUT } from "../constants/actionTypes";

//Reducers are functions more specifically functions that are accepting the state and action.

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      console.log(`logout`);
      localStorage.clear();
      localStorage.removeItem("profile");
      return { ...state, authData: null };

    default:
      return state;
  }
};

export default authReducer;
