import * as api from "../api";

/*Action Creators = are functions that return actions
payload: is usually the data where we store all of our posts.
*/

const getPosts = () => {
  const action = { type: "FETCH_ALL", payload: [] };

  return action;
};
