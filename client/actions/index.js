import { addTodo, deleteTodo, getTodos, updateTodo } from '../apis'

export const SET_TODOS = 'SET_TODOS'

export function setTodos (todos) {
  return {
    type: SET_TODOS,
    todos
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

export function deleteTodoAction (todo) {
  return dispatch => {
    return deleteTodo(todo)
      .then(() => {
        // console.log(id)
        dispatch(fetchTodos())
        return null
      })
  }
}

export function addToDoAction (taskDetails) {
  return dispatch => {
    return addTodo(taskDetails)
      .then(() => {
        dispatch(fetchTodos())
        return null
      })
  }
}

export function updateTodoAction (todo) {
  return dispatch => {
    return updateTodo(todo)
      .then(() => {
        dispatch(fetchTodos())
        return null
      })
  }
}