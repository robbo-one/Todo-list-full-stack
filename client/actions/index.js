import { getTodos, addNewTodo, delTodo, patchTodo } from '../apis/todos'

export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODOS = 'DELETE_TODOS'
export const UPDATE_TODO = 'UPDATE_TODO'
export const FILTER = 'FILTER'

export function filter (filter) {
  return {
    type: FILTER,
    filter: filter
  }
}


export function setTodos (todos) {
  return {
    type: SET_TODOS,
    todos: todos
  }
}

export function addTodos (newTodo) {
  return {
    type: ADD_TODO,
    todo: newTodo
  }
}

export function deleteTodos (id) {
  return {
    type: DELETE_TODOS,
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
        dispatch(setTodos(todos))
        return null
      })
  }
}

export function saveTodo (todo) {
  return dispatch => {
    return addNewTodo(todo)
      .then(res => {
        dispatch(addTodos(todo))
        return null
      })
  }
}

export function removeTodo (id) {
  return dispatch => {
    return delTodo(id)
      .then(res => {
        dispatch(deleteTodos(id))
        return null
      })
  }
}

export function changeTodo (todo) {
  return dispatch => {
    return patchTodo(todo)
      .then(res => {
        dispatch(updateTodo(todo))
        return null
      })
  }
} 


