import { deleteTodo, addTodo, getTodos } from '../apis/todos'

export const SET_LIST = 'SET_LIST'

export function setList (todos) {
  return {
    type: SET_LIST,
    todos
  }
}

export function fetchTodos () {
    return dispatch => {
      return getTodos()
        .then(todos => {
          dispatch(setList(todos))
          return null
        })
    }
  }

  export function insertTodo (todo) {
    return dispatch => {
      return addTodo(todo)
        .then(res => {
          dispatch(addToList(todo))
          return null
        })
    }
  }

  export function removeTodo (id) {
    return dispatch => {
      return deleteTodo(id)
        .then(res => {
          dispatch(removeFromList(id))
          return null
        })
    }
  }

export const ADD_TO_LIST = 'ADD_TO_LIST'

export function addToList (newTodo) {
  return {
    type: ADD_TO_LIST,
    todo: newTodo  }
}


export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST'

export function removeFromList (id) {
  return {
    type: REMOVE_FROM_LIST,
    id: id  }
}

