import { getTasks, addTask } from '../apis/apis'

export const SHOW_THE_TASKS = 'SHOW_THE_TASKS'
export const ADD_A_TASK = 'ADD_A_TASK'
export const UPDATE_A_TASK = 'UPDATE_A_TASK'
export const DELETE_A_TASK = 'DELETE_A_TASK'

// action creator, it's only job is to return an object
export function listAllTheTasks (tasks) {
  return {
    type: SHOW_THE_TASKS,
    tasks: tasks
  }
}

export function fetchTasks () {
  return dispatch => {
    return getTasks()
      .then(tasks => {
        dispatch(listAllTheTasks(tasks))
        return null
      })
  }
}

/*
ADD
UPDATE
DELETE
*/

export function addNewTask (detail, completed) {
  return {
    type: ADD_A_TASK,
    detail: detail,
    completed: false
  }
}



/*
{
  type: 'ADD_A_TASK',
  tasks: [{
  id: 10,
  detail: "CHeck tHis is working",
  completed: false
  }]
  }
  */