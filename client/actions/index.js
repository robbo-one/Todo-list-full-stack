//@ts-check

import { getTodos, toggleTask, addNewTask, deleteTask } from "../apis/todos";

export const SET_TODOS = "SET_TODOS";
export const TOGGLE = "TOGGLE";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";


export function setTodos(todos) {
  return {
    type: SET_TODOS,
    todos: todos,
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
  };
};

// task ЭТО ОБЪЕКТ
export function addNewTodo(task) {
  return {
    type: ADD_TODO,
    newTask: task,
  };
};

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id:id,
  };
};

export function fetchTodos() {
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
      })
  }
};

export function addNewTodos(task) {
  return dispatch => {
    return addNewTask(task)
      .then(task => {
        // console.log(task)
        dispatch(addNewTodo(task))
      })
  }
};

export function deleteThisTodo(id) {
  return dispatch => {
    return deleteTask(id)
      .then(() => {
        dispatch(deleteTodo(id))
      })
  }
};
