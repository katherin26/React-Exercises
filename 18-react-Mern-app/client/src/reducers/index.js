import { combineReducers } from "redux";

/*In here we can use all of the individual reducers that we have in our case we are only going to have 
posts, and for that reason we have to import posts 
*/
import posts from "./posts";
import auth from "./auth";

export default combineReducers({
  posts,
  auth,
});
