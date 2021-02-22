import { getTasks } from '../apis/apis'

export const SHOW_THE_TASKS = 'SHOW_THE_TASKS'
export const ADD_A_TASK = 'ADD_A_TASK'
export const UPDATE_A_TASK = 'UPDATE_A_TASK'
export const DELETE_A_TASK = 'DELETE_A_TASK'


export const listAllTheTasks = (tasks) => {
  return {
    type: SHOW_THE_TASKS,
    tasks
  }
}

/*
ADD
UPDATE
DELETE
*/

export const addTask = (task) => {
  return {
    type: ADD_A_TASK,
    task
  }
}



/*
{
  type: 'SHOW_THE_TASKS',
  tasks: [{
  id: 10,
  detail: "CHeck tHis is working",
  completed: false
  }]
  }
  */