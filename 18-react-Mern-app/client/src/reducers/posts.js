/*NOTE: A reducer is a function so let's do it like that, that function accepts the state and the 
action.
based on the action type so if action.type is = to create , then we want to do some logic like, we
want to return either action or we want to return the state changed by the action.
Usually you are going to have multiple if statements for a lot of different things and for that reason 
people prefer to have the switch statement and this is how it works.
*/

import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_BY_SEARCH,
  LIKE,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfpages: action.payload.numberOfpages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload.data };

    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };

    case LIKE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload._id ? action.payload : post
        ),
      };

    default:
      return state;
  }
};
