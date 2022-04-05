/*NOTE: The reducer is going to be a simply function that ultimately returns a state.
Is called reducer and is going to be a function that returns a state.
The reducer takes two parameters and the initial is going to be the state, is the initial state that the
reducer is going to return in this case is going to be 0 and the second parameter is going to be the action.*/

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
