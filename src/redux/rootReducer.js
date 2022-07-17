import { combineReducers } from "redux";
import { entryReducer } from "./entryReducer";

export const rootReducer = combineReducers({
  isAuth: entryReducer
})