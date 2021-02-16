
import { getTodos, addTodo, deleteTodo, changeTodo } from '../apis/tasks'

export const SET_TODOS = 'SET_TODOS'

export function setTodos(todos) {
  return {
    type: SET_TODOS,
    todos
  }
}

export function fetchTodos() {
  return dispatch => {
    return getTodos()
      .then(todos => {
        dispatch(setTodos(todos))
        return null
      })
  }
}

export function fetchUpdatedTodos(formData) {
  return dispatch => {
    return addTodo(formData)
      .then( () => {
        dispatch(fetchTodos()
        )})
  }
}

export function removeTodo (id) {
  return dispatch => {
    return deleteTodo(id)
    .then( () => {
      dispatch(fetchTodos()
      )})
}
}

export function updateTodo (todo) {
  return dispatch => {
    return changeTodo(todo)
    .then( () => {
      dispatch(fetchTodos()
      )})
}
}
