import { FILTER } from '../actions'


const initialState = { filter: 'all' }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return { ...state, filter: action.filter }
    default:
      return state
  }
}

export default reducer