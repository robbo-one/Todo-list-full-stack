export const ADD_TASK = 'GET_TASK'
export const DEL_TASK = 'DEL_TASK'
export const SET_TASKS = 'SET_TASKS'

export function addTask(task, priority){
  return {
    type: ADD_TASK,
    task: task,
    priority: priority
  }
}

export function deleteTask(id){
  return {
    type: DEL_TASK,
    id: id
  }
}