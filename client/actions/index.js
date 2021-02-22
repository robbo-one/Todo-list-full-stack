import {
    getTasks
} from '../apis/tasks'   // imported from the API

export const SET_TASKS = 'SET_TASKS'

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


