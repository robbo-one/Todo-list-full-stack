import { getTodos, addNewTodo } from '../apis/todos'

export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'


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
