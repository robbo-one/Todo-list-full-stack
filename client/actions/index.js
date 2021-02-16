import { getTasks, addTask } from '../apis/api'

export const SET_TASKS = 'SET_TASKS'
export const ADD_TASK = 'ADD_TASK'

export const setTasks = tasks => {
  return {
    type: SET_TASKS,
    tasks
  } 
}

export const fetchTasks = () => {
  return dispatch => {
    return getTasks()
      .then(tasks => {
        dispatch(setTasks(tasks))
        return null
      })
  }
}

export const createTask = task => {
  return {
    type: ADD_TASK,
    task
  }
}

export const newTask = (task, priority) => {
  return dispatch => {
    return addTask(task, priority)
      .then(task => {
        dispatch(createTask(task))
        return null
      })
  }
}
