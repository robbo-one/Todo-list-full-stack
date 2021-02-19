import {DELETE_TODO, ADD_TO_LIST, SET_LIST, REMOVE_FROM_LIST } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return action.todos
      case ADD_TO_LIST:
        return [...state, action.todo]
        case REMOVE_FROM_LIST:
            return state
    default:
      return state
  }
}

export default reducer