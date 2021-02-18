import { combineReducers } from "redux";

// import stuff from './stuff'
import todos from "./allTodos";
import addTodos from "./addTodos";
import allTodos from "./allTodos";

export default combineReducers({
  todos,
  addTodos,
  allTodos,
  // stuff
});
