import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { newsFeedReducer } from "./newsFeedReducer";
import { alertReducer } from "./alertReducer";
import { authReducer } from "./authReducer";
import { todoReducer } from "./todoReducer";

const rootReducer = combineReducers({
  dataReducer,
  newsFeedReducer,
  todoReducer,
  alertReducer,
  authReducer
});

export default rootReducer;
