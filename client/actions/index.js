//@ts-check

import { getTodos } from "../apis/todos";

export const SET_TODOS = "SET_TODOS";

export function setTodos (todos) {
  return {
    type: SET_TODOS,
    todos
  };
};

export function fetchTodos () {
  return dispatch => {
    return getTodos()
      .then(todos => {
        dispatch(setTodos(todos))
        return null
      });
  };
};