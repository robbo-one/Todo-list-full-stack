import { ADD_TODO, SET_TODOS } from '../actions'


const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos
    case ADD_TODO:
      return [...state, action.todo]
    default:
      return state
  }
}

export default reducer