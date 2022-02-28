import React from "react";
import ReactDOM from "react-dom";

/*here we initialize redux, react redux provider is going to keep track of that store.
Which is that global state and that allows us to access that store from anywhere inside of the app
we don't have to be exactly in a parent component or in a child component we can access that state
from anywhere then we're going to import : createStore, applyMiddleware, compose from redux.
and finally we need to import thunk from redux-thunk.*/

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./App";

/*To set redux we need to create a variable called store = that's going to be equal to create store.
Create store takes in two different things first: we have the reducers which we didn't define yet as 
you can see they are red we need to define the reducers.
And the second thing is going to be compose: compone() which is a function. and then we apply middleware 
and then in there we pass thunk.
*/
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
