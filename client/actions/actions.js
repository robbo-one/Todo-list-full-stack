import { getTasks, newTask } from '../apis/apis'

export const SET_TASKS = 'SET_TASKS'
export const NEW_TASK = 'NEW_TASK'

export function setTasks (tasks) {
  return {
    type: SET_TASKS,
    tasks: tasks
  }
}

export function fetchTasks () {
  return dispatch => {
    return getTasks()
      .then(tasks => {
        dispatch(setTasks(tasks))
        return null
      })
  }
}

export function addNewTask (tasks) {
  return {
    type: NEW_TASK,
    tasks: tasks
  }
}

export function saveNew (task) {
  return dispatch => {
    return newTask(task)
    .then(() => {
      dispatch(fetchTasks())
      return null
    })
  }
}