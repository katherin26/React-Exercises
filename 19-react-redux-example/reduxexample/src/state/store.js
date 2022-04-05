import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

//NOTE: The second parameter is a default value.
export const store = createStore(reducers, {}, applyMiddleware(thunk));
