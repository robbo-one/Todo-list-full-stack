export const ADD_TASK = 'GET_TASK'
export const DEL_TASK = 'DEL_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
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

export function updateTask(id, newTask){
  return {
    type: UPDATE_TASK,
    id : id,
    newTask : newTask
  }
}