import { getTasks } from "../apis/tasks"

export const SET_TASKS = 'SET_TASKS'

export function setTasks(tasks) {
    return {
        type:SET_TASKS,
        tasks,
    }
}

export function fetchTasks () {
    return dispatch => {
        return getTasks()
        .then(tasks => {
            dispatch(setTasks(tasks))
            return null
        })
    }
}