import { FILTER_ALL} from '../actions'

const initialState = "all"

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ALL:
      return action.filter
    default:
      return state
  }
}

export default reducer