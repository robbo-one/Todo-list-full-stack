import { combineReducers } from "redux";

// import stuff from './stuff'
import todos from "./allTodos";
import addTodos from "./addTodos";

export default combineReducers({
  todos,
  addTodos,
  // stuff
});
