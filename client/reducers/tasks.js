import { SET_TASKS, ADD_TASK } from '../actions'
//Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState.



const initialState = [ 
{id: 1, task: 'dont eat the cat', priority:  'EXTREME', completed: 'Yes' },
{id: 2, task: 'buy a new cat', priority: 'Low', completed: 'No' },
{id: 3, task: 'feed the cat', priority: 'medium', completed: 'No' } 
]



const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return action.tasks
            case ADD_TASK:
            return [...state, action .task]
        default:
            return state
    }
   }
    export default reducer
