import { getTodos, addTodos, deleteTodos } from '../apis/todo'

export const SET_TODOS = 'SET_TODOS'
export const ADD_TODOS = 'ADD_TODOS'
export const DELETE_TODOS = 'DELETE_TODOS'

export function setTodos(todos) {
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

// instaid of calling this function The func below calls fetchTodos again to rerender the list and calls the db again

// export function addTodo(todos) {
//   return {
//     type: ADD_TODOS,
//     todos: todos,
//   }
// }

export function addTheTodos(todos) {
  return dispatch => {
    return addTodos(todos)
    .then(() => {
      dispatch(fetchTodos())
      return null
    })
  }
}

export function deleteTheTodos(id) {
  return dispatch => {
    return deleteTodos(id)
    .then(result => {
      dispatch(fetchTodos())
      return null
    })
  }
}

// {
//   type: 'ADD_TODOS',
//   id: 4,
//   task: 'feed the goats',
//   completed: true
//   }


  