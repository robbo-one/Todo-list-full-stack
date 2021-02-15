export const ADD_TASK = "GET_TASK"
export const DEL_TASK = "DEL_TASK"
export const UPDATE_TASK = "UPDATE_TASK"
export const TASK_COMPLETE_TOGGLE = "TASK_COMPLETE_TOGGLE"
export const SET_TASKS = "SET_TASKS"

export function addTask(task, priority) {
  return {
    type: ADD_TASK,
    task: task,
    priority: priority,
  }
}

export function deleteTask(id) {
  return {
    type: DEL_TASK,
    id: id,
  }
}

export function updateTask(id, newTask) {
  return {
    type: UPDATE_TASK,
    id: id,
    newTask: newTask,
  }
}

export function taskCompleteToggle(id, completedStatus) {
  return {
    type: TASK_COMPLETE_TOGGLE,
    id: id,
    completedStatus: completedStatus,
  }
}
