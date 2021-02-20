//@ts-check

import { getTodos, toggleTask } from "../apis/todos";

export const SET_TODOS = "SET_TODOS";
export const TOGGLE = "TOGGLE";
// export const DELETE_TODO = "DELETE_TODO";


export function setTodos (todos) {
  return {
    type: SET_TODOS,
    todos
  };
};

/**
 *
 * @param {number} id
 * @param {number} completed
 */
export function toggledTask(id, completed) {
  return {
    type: TOGGLE,
    id: id,
    completed: completed,
  }
}


// export function deleteTodo (id) {
//   return {
//     type: DELETE_TODO,
//     id:id
//   }
// }

export function fetchTodos () {
  return dispatch => {
    return getTodos()
      .then(todos => {
        dispatch(setTodos(todos))
        return null
      });
  };
};

/**
 *
 * @param {number} id
 */
export function toggleTheTask(id) {
  return dispatch => {
    return toggleTask(id)
      .then(q => {
        dispatch(toggledTask(q.id, q.completed));
      });
  };
};
