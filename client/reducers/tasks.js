import { SET_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../actions'

const initialState = [
    {id: 1, task: 'eat the cat', priority:  'EXTREME', completed: 'Yes'},
        {id: 2, task: 'buy a new cat', priority: 'Low', completed: 'No'},
       {id: 3, task: 'feed the cat', priority: 'medium', completed: 'No'}
]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return action.tasks
        case ADD_TASK:
            return [...state, action .task]
            case DELETE_TASK:
                return state.filter(task =>
                    console.log(task),
                    task.id !== action.id)
                    case UPDATE_TASK:
                        return state.map(task => {
                            if (task.id == action.id){
                                return {...task, task: action.newTask}
                            } else {
                                return task
                            }
                        })
        default:
            return state
    }
}

export default reducer