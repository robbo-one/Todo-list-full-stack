import { getTasks } from "../apis/api"

export const ADD_TASK = 'ADD_TASK'
export const SET_TASKS = 'SET_TASKS'

export function addTask (task) {
  return {
    type: ADD_TASK,
    task:task
  }
}

export function setTasks (tasks) {
  return {
    type: SET_TASKS,
    tasks
  }
}

export function fetchTasks() {
  return dispatch => {
    return getTasks()
      .then(tasks => {
        dispatch(setTasks(tasks))
        return null
      })
  }
}