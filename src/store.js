import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../src/reducers";
import { composeWithDevTools } from "remote-redux-devtools";

export const store = createStore(
  rootReducer,
  // initialState,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
