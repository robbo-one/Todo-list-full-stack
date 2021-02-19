import { SET_TASKS } from "../actions"

const initialState = [
    {
        id: 1,
        task: '',
        priority: 2,
        completed: '',
    }
]

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TASKS:
            return action.tasks
        default:
            return state
    }
}


export default reducer

