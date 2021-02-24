import {
    getTasks,
    setTasks
} from '../apis/tasks'   // imported from the API

export const SET_TASKS = 'SET_TASKS'

export const setTasks (tasks) {       // FIX WHAT"S GOING WRONG IN THIS FILE
export const ADD_TASK = 'ADD_TASK'
export function setTasks (tasks) {
return {
    type: SET_TASKS,
    tasks
   }
 }

export function fetchTasks () {
    return dispatch => {
        return getTasks()
        .then(tasks => {
            console.log('action fetch', tasks)
            dispatch(setTasks(tasks))
            return null
        })
    }
}


