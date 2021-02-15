import { getTodos, addTodos } from '../apis/todo'

export const SET_TODOS = 'SET_TODOS'
export const ADD_TODOS = 'ADD_TODOS'

export function setTodos(todos) {
  return {
    type: SET_TODOS,
    todos: todos
  }
}

export function addTodo(todos) {
  return {
    type: ADD_TODOS,
    todos: todos,
    id: id
  }
}

export function addTheTodos(todos) {
  return dispatch => {
    return addTodos()
    .then(todos => {
      dispatch(addTodo(todos))
      return null
    })
  }
}

export function fetchTodos () {
  return dispatch => {
    return getTodos()
    .then(todos => {
      dispatch(setTodos(todos))
      return null
    })
  }}

  