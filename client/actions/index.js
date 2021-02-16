
import { getTodos, addTodo } from '../apis/tasks'

export const SET_TODOS = 'SET_TODOS'
export const DEL_TODO = 'DEL_TODO'

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

export function delTodo(id) {
  return {
    type: DEL_TODO,
    id: id
  }
}
