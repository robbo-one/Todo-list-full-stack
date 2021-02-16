import {
  changeTask,
  completeToggle,
  delTask,
  getTasks,
  postTask,
} from "../apis/tasks"

export const ADD_TASK = "ADD_TASK"
export const DEL_TASK = "DEL_TASK"
export const UPDATE_TASK = "UPDATE_TASK"
export const TASK_COMPLETE_TOGGLE = "TASK_COMPLETE_TOGGLE"
export const SET_TASKS = "SET_TASKS"

//OLD REDUCER FUNCTIONS

// export function addTask(task, priority) {
//   return {
//     type: ADD_TASK,
//     task: task,
//     priority: priority,
//   }
// }

// export function deleteTask(id) {
//   return {
//     type: DEL_TASK,
//     id: id,
//   }
// }

// export function updateTask(id, newTask) {
//   return {
//     type: UPDATE_TASK,
//     id: id,
//     newTask: newTask,
//   }
// }

// export function taskCompleteToggle(id, completedStatus) {
//   return {
//     type: TASK_COMPLETE_TOGGLE,
//     id: id,
//     completedStatus: completedStatus,
//   }
// }

export function fetchTasks() {
  return (dispatch) => {
    return getTasks() //from api
      .then((tasks) => {
        // console.log("fetching tasks")
        dispatch(setTasks(tasks))
        return null //ask about this, now you know!
      })
  }
}

export function addTask(task, priority) {
  return (dispatch) => {
    return postTask(task, priority).then(() => {
      dispatch(fetchTasks())
      return null
    })
  }
}

export function deleteTask(id) {
  return (dispatch) => {
    return delTask(id).then(() => {
      dispatch(fetchTasks())
      return null
    })
  }
}

export function updateTask(id, newTask) {
  return (dispatch) => {
    return changeTask(id, newTask).then(() => {
      dispatch(fetchTasks())
    })
  }
}

export function taskCompleteToggle(id, completedStatus) {
  return (dispatch) => {
    return completeToggle(id, completedStatus).then(() => {
      dispatch(fetchTasks())
    })
  }
}

export function setTasks(tasks) {
  return {
    type: SET_TASKS,
    tasks: tasks,
  }
}

