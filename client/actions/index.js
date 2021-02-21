import { 
        getTasks,
        addTask,
        updateTask,
        deleteTask
    } from '../apis/tasks'

export const SET_TASKS = 'SET_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK ='UPDATE_TASK' 
export const DELETE_TASK = 'DELETE_TASK'
export function setTasks (tasks) {
  return {
    type: SET_TASKS,
    tasks
  }
}

export function fetchTasks () {  // What is happeneing here
  return dispatch => {
    return getTasks()
      .then(tasks => {
          console.log('action fetch', tasks)
        dispatch(setTasks(tasks))
        return null
      })
  }
}

export function createTask(task) {
    return {
        type: ADD_TASK,
        task
    }
}

export function updateTodo (task) {
    return {
      type: UPDATE_TASK,
      task: task
    }
  }

export function newTask (task, priority){
    return dispatch => {
        return addTask(task,priority)
            .then(task => {
                console.log('action new task', task)
                dispatch(createTask(task))
                return null
            })
    }
}

export function updateTasks (id, newTask) {
    return dispatch => {
        return updateTask(id, newTask)
        .then(task => {
            console.log('update tasks'),
            dispatch(createTask(task))
            return null})

    }
}

export function deleteTasks (id) {
    return {
        type: DELETE_TASK,
        id: id
    }
  e}
