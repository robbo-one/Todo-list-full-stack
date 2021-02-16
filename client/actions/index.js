import { getTodos, addTodo, updateTodo, deleteTodo } from '../apis/tasks'

export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'


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

  export function addTodo () {
    return {
      type: ADD_TODO,
      id: id,
      task: task,
      priority: priority,
      completed: completed
    }
  }