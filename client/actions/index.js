import { getTasks, addTask, deleteTask, updateTask } from '../apis/api'

export const SET_TASKS = 'SET_TASKS'
// export const ADD_TASK = 'ADD_TASK'
// export const DEL_TASK = 'DEL_TASK'
// export const UPT_TASK = 'UPT_TASK'

export const setTasks = tasks => {
  return {
    type: SET_TASKS,
    tasks: tasks
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

// export const createTask = task => {
//   return {
//     type: ADD_TASK,
//     task
//   }
// }

export const newTask = (task, priority) => {
  return dispatch => {
    return addTask(task, priority)
      .then(() => {
        dispatch(fetchTasks())
        return null
      })
  }
}

// export const removeTask = id => {
//   return {
//     type: DEL_TASK,
//     id
//   }
// }

export const delTask = id => {
  return dispatch => {
    return deleteTask(id)
      .then(() => {
        dispatch(fetchTasks())
        return null
      })
  }
}

// export const changeTask = task => {
//   return {
//     type: UPT_TASK,
//     task
//   }
// }

export const uptTask = (id, newTask, priority) => {
  return dispatch => {
    return updateTask(id, newTask, priority)
      .then(() => {
        dispatch(fetchTasks())
        return null
      })
  }
}