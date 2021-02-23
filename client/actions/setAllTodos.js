import { addTodos } from "../apis/addTodos";
import { getAllTodos } from "../apis/allTodos";
import { updateATodo } from "../apis/addTodos";
import { deleteATodo } from "../apis/addTodos";

//Note: Thunk conditional dispatch actions are marked below

//1= User action from component initialises this function
export function fetchAllTodos() {
  return (dispatch) => {
    return getAllTodos() //dispatches getAllTodos function inside api file. API will hit route then dbase and return data via same path back to Line 12 below
      .then((todos) => {
        //api returns body of response (list of todos)
        dispatch(setAllTodos(todos)); //thunk conditional dispatch - app waits for returned data before dispatching setAllTodos func.
        return null;
      });
  };
}

export const SET_ALLTODOS = "SET_ALLTODOS";
//Thunk action now able to be dispatched as data is received back back api
export function setAllTodos(todos) {
  return {
    type: SET_ALLTODOS, // this action is sent to reducer which will put todos data in to state
    todos,
  };
}

export function addTodo(task) {
  return (dispatch) => {
    //console.log(task)
    return addTodos(task) //dispatches addTodos func in api
      .then((task) => {
        //object returned from api
        dispatch(setNewTodo(task)); //thunk conditional dispatch. calls setNewTodo func which calls ADD_TODO function in reducer
      });
  };
}

export function setNewTodo(task) {
  return {
    type: "ADD_TODO", //this action is sent to reducer which will update state with list of todos containing appended task at the bottom
    task,
  };
}

//update todo - action receives an id and a string
export function updateTodo(id, updatedTodo) {
  return (dispatch) => {
    return updateATodo(id, updatedTodo) //calls updateATodo function in API, then waits (async)
      .then((updatedTodo) => {
        dispatch(setUpdatedTodo(updatedTodo)); //thunk conditional dispatch. When data received back from api it calls setUpdatedTodo func (in actions) which dispatches UPDATE_TODO action to reducer to update state
      });
  };
}
export function setUpdatedTodo(updatedTodo) {
  console.log(updatedTodo);
  return {
    type: "UPDATE_TODO", //action sent to reducer which will update state with updated todo
    updatedTodo,
  };
}

export function deleteThisTodo(id) {
  console.log("inside the delete function");
  return (dispatch) => {
    return deleteATodo(id) //calls deleteATodofunction in api then waits (async)
      // .then((deletedTodo) => {
      //   dispatch(setDeletedTodo(deletedTodo));
      // });
  };
}
//this function will be completed
// export function setDeletedTodo(deletedTodo) {
//   return {
//     type: "DELETE_TODO",
//     deletedTodo,
//   }


