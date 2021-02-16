import { getTasks, addTask } from '../apis/tasks'

export const SET_TASKS = 'SET_TASKS'
export const ADD_TASK = 'ADD_TASK'

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
          console.log('action bronson', tasks)
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

export function newTask (task, priority){
    return dispatch => {
        return addTask(task,priority)
            .then(task => {
                console.log('action task', task)
                dispatch(createTask(task))
                return null
            })
    }
}