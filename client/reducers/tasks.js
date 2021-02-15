import { ADD_TASK, DEL_TASK} from "../actions"

const initialState = [
  { id: 1, task: "Homework", priority: 1, completed: "no" },
  { id: 2, task: "Laundry", priority: 2, completed: "no" },
  { id: 3, task: "Cry", priority: 3, completed: "no" },
  { id: 4, task: "Cook Dinner", priority: 4, completed: "no" }
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: //
      const l = state.length+1
      return [
        ...state,
        {id: l, task: action.task, priority: action.priority, completed: "no" },
      ]
    case DEL_TASK:
      return state.filter(task => task.id != action.id)
    default:
      return state
  }
}

export default reducer