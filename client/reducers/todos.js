import { SET_TODOS, ADD_TODO } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos
    default:
      return state
    case ADD_TODO:
      return [...state, {
        id: action.id,
        task: action.task,
        priority: action.priority,
        completed: action.completed
      }]
  }
}



export default reducer