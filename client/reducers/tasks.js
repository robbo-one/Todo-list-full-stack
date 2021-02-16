import { ADD_TASK, DEL_TASK, SET_TASKS, TASK_COMPLETE_TOGGLE, UPDATE_TASK} from "../actions"

const initialState = [
  // { id: 1, task: "Homework", priority: 1, completed: "no" },
  // { id: 2, task: "Laundry", priority: 2, completed: "no" },
  // { id: 3, task: "Cry", priority: 3, completed: "no" },
  // { id: 4, task: "Cook Dinner", priority: 4, completed: "no" }
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return action.tasks
    case ADD_TASK: //fix this later
      return [
        ...state,
        {task: action.task, priority: action.priority, completed: "no" },
      ]
    case DEL_TASK:
      return state.filter(task => task.id != action.id)
    case UPDATE_TASK:
      return state.map(task => {
        if (task.id == action.id){
          return {...task, task: action.newTask}
        } else {
          return task
        }
      })
    case TASK_COMPLETE_TOGGLE:
      const status = action.completedStatus
      const newStatus = status == 'no' ? "yes" : "no"
      return state.map(task => {
        return task.id == action.id ? {...task, completed: newStatus} : task
      })
    default:
      return state
  }
}

export default reducer