import { getTodos, addTodos, deleteTodos, updateTodos } from '../apis/todos'


export const GET_TODO = 'GET_TODO'
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'


export function getTodo (todos) {
  return {
    type: GET_TODO,
    todos: todos
  }
}

export function addTodo (newTodo) {
  return {
    type: ADD_TODO,
    todo: newTodo
  }
}

export function deleteTodo (id) {
  return {
    type: DELETE_TODO,
    id: id
  }
}

export function updateTodo (todo) {
  return {
    type: UPDATE_TODO,
    todo: todo
  }
}
export function fetchTodos () {
  return dispatch => {
    return getTodos()
      .then(todos => {
        dispatch(getTodo(todos))
        return null
      })
  }
}

export function saveTodo (todo) {
  return dispatch => {
    return getTodos(todo)
      .then(res => {
        dispatch(addTodo(todo))
        return null
      })
  }
}

export function removeTodo (id) {
  return dispatch => {
    return deleteTodos(id)
      .then(res => {
        dispatch(deleteTodo(id))
        return null
      })
  }
}

export function changeTodo (todo) {
  return dispatch => {
    return updateTodos(todo)
      .then(res => {
        dispatch(updateTodo(todo))
        return null
      })
  }
}