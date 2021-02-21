import {ADD_TO_LIST, SET_LIST, UPDATE_LIST } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return action.todos
      case ADD_TO_LIST:
        return [...state, action.todo]
        // case REMOVE_FROM_LIST:
        //     return state
            case UPDATE_LIST:
            return state
    
    default:
      return state
  }
}

export default reducer