import * as api from "../api";

/*Action Creators = are functions that return actions and that action is just an object that has the 
the type and the 
payload: is usually the data where we store all of our posts.
with redux thunk since we'll be dealing with asynchronous logic we have to add this async dispatch 
function in front of it and then instead of returning the action we have to dispatch it to actually 


*/

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: [] });
  } catch (error) {
    console.log(error.message);
  }
};
