import { combineReducers } from "redux";

// import stuff from './stuff'
import todos from "./todos";
import addTodos from "./addTodos";

export default combineReducers({
  todos,
  addTodos,
  // stuff
});
