//@ts-check

import { getTodos } from "../apis/todos";

export const SET_TODOS = "SET_TODOS";
export const TOGGLE = "TOGGLE";
export const DELETE_TODO = "DELETE_TODO";


export function setTodos (todos) {
  return {
    type: SET_TODOS,
    todos
  };
};

/**
 *
 * @param {number} id
 */
export function setCompleted(id) {
  return {
    type: TOGGLE,
    id: id
  }
}

export function deleteTodo (id) {
  return {
    type: DELETE_TODO,
    id:id
  }
}

export function fetchTodos () {
  return dispatch => {
    return getTodos()
      .then(todos => {
        dispatch(setTodos(todos))
        return null
      });
  };
};
