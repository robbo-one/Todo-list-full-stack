import { getTodos } from '../apis/todo'

export const SET_TODOS = 'SET_TODOS'

export function setTodos(todo) {
  return {
    type: SET_TODOS,
    todos: todos
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

  